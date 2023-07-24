import React, { useState, useRef } from "react";
import ReactQuill from "react-quill";
import axios from "axios";
import { Form, Input, Button, message } from "antd";
import { ImageFileResizer } from "react-image-file-resizer";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import "../styles/main.css";
import "../styles/admin.css";
import "react-quill/dist/quill.snow.css";
import "react-quill/dist/quill.bubble.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "antd/dist/reset.css";
import Login from "./Login";
import DeleteUserForm from "./DeleteUserForm";
import FlowBackground from "../images/Flow_backgroung.jpg";
import SylviaLogo from "../images/sylvia-bachiegga-high-resolution-logo-black-on-transparent-background.png";


const { TextArea } = Input;

export default function Admin(setIsAuthenticated) {
  const [form] = Form.useForm();
  const [content, setContent] = useState({ text: "", paragraphs: [] });
  const [base64data, setBase64data] = useState(null);
  const editorRef = useRef();

  const isAdminPage = true;
  
  const [isRegistering, setIsRegistering] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const formRef = useRef(null);
  const navigate = useNavigate();

  const onChange = (value) => {
    const delta = value.delta || {};
    const content = delta.ops || [];

    const paragraphs = content
      .filter((op) => typeof op.insert === "string" && op.insert.trim() !== "")
      .map((op) => op.insert.trim());
    setContent({ text: value, paragraphs: paragraphs });
  };


  const onFinishRegisterForm = (values) => {
    const { username, password } = values;
    if (isRegistering) {
      // Registration logic
      axios
        .post("http://localhost:3001/register", { username, password })
        .then((res) => {
          if (res.data.message === "User registered successfully") {
            setIsRegistering(false);
            formRef.current.resetFields();
            alert("Registration successful! You can now log in.");
          } else {
            alert("Username already exists");
          }
        })
        .catch((error) => {
          console.error(error);
          alert("Registration failed");
        });
    } else {
      // Login logic
      axios
        .post("http://localhost:3001/validatePassword", { username, password })
        .then((res) => {
          if (res.data.validation) {
            setIsAuthenticated(true);
            formRef.current.resetFields();
            navigate("/Portfolio");
          } else {
            alert("Password/username is not correct.");
          }
        })
        .catch((error) => {
          console.error(error);
          alert("Login failed");
        });
    }
  };
    
  // const handleToggleRegister = () => {
  //   setIsRegistering(!isRegistering);
  //   formRef.current.resetFields();
  // };

////////////////////////////////////////////////

const handleToggleRegister = () => {
  setIsRegistering(!isRegistering);
  formRef.current.resetFields();
};

// Function to handle registration
const handleRegister = (values) => {
  const { username, password } = values;
  axios
    .post("http://localhost:3001/register", { username, password })
    .then((res) => {
      if (res.data.message === "User registered successfully") {
        setIsRegistering(false);
        formRef.current.resetFields();
        alert("Registration successful! You can now log in.");
      } else {
        alert("Username already exists");
      }
    })
    .catch((error) => {
      console.error(error);
      alert("Registration failed");
    });
};



//////////////////////////////////////////////////////








  const handleDeleteUser = (username) => {
    axios
      .post("http://localhost:3001/deleteUser", { username })
      .then((res) => {
        console.log(res.data.message);
        formRef.current.resetFields();
      })
      .catch((error) => {
        console.error(error);
      });
    console.log("Deleting user:", username);
  };
  
  const onFinishLoginForm = (values) => {
    handleToggleRegister(values.username);
    console.log("VALUE USERNAME", values.username)
  };

  const onFinishDeleteForm = (values) => {
    handleDeleteUser(values.username);
  }

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    ImageFileResizer.imageFileResizer(
      file,
      600, //max width
      600, //max height
      "JPEG", //format
      80, //quality
      0, //rotation
      (compressedImage) => {
        const reader = new FileReader();
        reader.readAsDataURL(compressedImage);
        reader.onload = () => {
          const base64data = reader.result.split(",")[1];
          setBase64data(base64data);
        };
      },
      "base64"
    );
  };

  const onFinishPostForm = async (values) => {
    try {
      const deltaContent = editorRef.current.getEditor().getContents();
      const plainTextContent = editorRef.current.getEditor().getText();

      if (!deltaContent) {
        return;
      }

      // Convert deltaContent to an array of paragraphs
      const paragraphs = deltaContent.ops
        .filter(
          (op) => typeof op.insert === "string" && op.insert.trim() !== ""
        )
        .map((op) => op.insert.trim());

      const post = {
        image: base64data,
        title: values.title,
        content: content.text,
        author: values.author,
        date: new Date(),
        styling: JSON.stringify(deltaContent),
        deltaContent: deltaContent,
        plainTextContent: plainTextContent,
        paragraphs: paragraphs,
      };

      const response = await axios.post("http://localhost:3001/blog.db", post);
      console.log("Created post:", response.data);

      form.resetFields();

      message.success("Post created successfully");
    } catch (error) {
      console.error("Failed to create post:", error);
      message.error("Failed to create post");
    }
  };

  return (
    <>
      
<header data-bs-theme="dark">
        <nav className="navbar">
          <a className="navbar-brand" href="/">
            <div className="sylvia-logo-container-about">
              <img
                className="sylvia-logo-about"
                src={SylviaLogo}
                alt="Sylvia Logo"
              />
            </div>
          </a>

          <div className="flow-container-about">
            <img
              className="flow-background-about"
              src={FlowBackground}
              alt="Background about"
              style={{
                backgroundImage: `url(${FlowBackground})`,
              }}
            />
          </div>
        </nav>
      </header>
      
      <section>
        <div
          className=""
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 80,
          }}
        >
          <Form
            name="post_form"
            initialValues={{
              remember: true,
            }}
            onFinish={(values) => onFinishPostForm(values, form)}
            form={form}
            style={{ width: "80%" }}
          >
            <Form.Item
              label={<span className="title-label">Title</span>}
              name="title"
              style={{ width: "100%", marginBottom: "40px" }}
              rules={[
                {
                  required: true,
                  message: "Please input the post title!",
                },
              ]}
            >
              <Input style={{ fontSize: "18px" }}/>
            </Form.Item>

            <Form.Item
              label={<span className="content-label">Content</span>}
              name="content"
              rules={[
                { required: true, message: "Please input the post content!" },
              ]}
            >
              <ReactQuill
                ref={editorRef}
                value={JSON.stringify(content)}
                onChange={(content) => onChange(content)}
                className="quill-editor"
                modules={{
                  toolbar: [
                    [{ header: [1, 2, false] }],
                    ["bold", "italic", "underline", "strike"],
                    [{ color: [] }, { background: [] }],
                    [{ align: [] }],
                    ["link", "image"],
                    ["clean"],
                  ],
                }}
              />
            </Form.Item>
            <Form.Item
              label={<span className="author-label">Author</span>}
              name="author"
              style={{ width: "100%", marginTop: "40px", fontSize: "18px" }}
              rules={[
                {
                  required: true,
                  message: "Please input the author of this post!",
                },
              ]}
            >
              <Input style={{ fontSize: "18px" }}/>
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Create Post
              </Button>
            </Form.Item>
          </Form>
        </div>
      </section>

      <div className="login-admin-form">
        <div>
          {isRegistering ? (
            <h2>Create an Account</h2>
          ) : (
            <h2>Login to Your Account</h2>
          )}

          {/* Conditionally render the RegistrationForm */}
          {isRegistering ? (
            <Login handleRegister={handleRegister} />
          ) : (
            <Form
              name="normal_login"
              className="admin-login-form"
              initialValues={{
                remember: true,
              }}
              onFinish={onFinishLoginForm}
              ref={formRef}
            >
              {/* ... (existing login form content) */}
            </Form>
          )}

          <p>
            {isRegistering ? (
              <>
                Wanna go back to Login?{" "}
                <Button type="link" onClick={handleToggleRegister}>
                  Click HERE
                </Button>
              </>
            ) : (
              <>
                Wanna register a new visitor?{" "}
                <Button type="link" onClick={handleToggleRegister}>
                  Click HERE
                </Button>
              </>
            )}
          </p>
        </div>
      </div>





      {/* <div className="login-admin-form">
        <div>
          {isRegistering ? (
            <h2>Create an Account</h2>
          ) : (
            <h2>Login to Your Account</h2>
          )}

          <Form
            name="normal_login"
            className="admin-login-form"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinishLoginForm}
            ref={formRef}
          >
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input Username!",
                },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Username"
              />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your Password!",
                },
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                {isRegistering ? "Register" : "Log in"}
              </Button>
            </Form.Item>

            <Form.Item>
              <div className="delete-form">
                <Button
                  type="primary"
                  htmlType="button"
                  className="delete-form-button"
                  onClick={() => setIsDeleting(true)}
                >
                  Delete User
                </Button>
                {isDeleting && (
                  <DeleteUserForm handleDeleteUser={handleDeleteUser} />
                )}
              </div>
            </Form.Item>
        
          </Form>
          <p>
            {isRegistering ? (
              <>
                Wanna go back to Login?{" "}
                <Button type="link" onClick={handleToggleRegister}>
                  Click HERE
                </Button>
              </>
            ) : (
              <>
                Wanna register a new visitor?{" "}
                <Button type="link" onClick={handleToggleRegister}>
                  Click HERE
                </Button>
              </>
            )}
          </p>
          </div>
      </div>             */}
    </>
  );
}
