import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "antd/dist/reset.css";
import { Form, Input, Button, Modal } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import axios from "axios";

import DeleteUserForm from "./DeleteUserForm";
import FlowBackground from "../images/Flow_backgroung.jpg";
import SylviaLogo from "../images/sylvia-bachiegga-high-resolution-logo-black-on-transparent-background.png";
import "../styles/login.css";

export default function Login({ setIsAuthenticated }) {
  const [isRegistering, setIsRegistering] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const navigate = useNavigate();
  const formRef = useRef(null);

  const onFinish = (values) => {
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

  const handleToggleRegister = () => {
    setIsRegistering(!isRegistering);
    formRef.current.resetFields();
  };

  const handleDeleteUserClick = () => {
    navigate("/DeleteUserForm")
  };

  const handleDeleteUser = (username) => {
    // Delete user logic
    console.log("Deleting user:", username);
  };

  return (
    <>
      <header data-bs-theme="dark">
        <nav className="navbar navbar-expand-lg navbar-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              <div className="sylvia-logo-container">
                <img
                  className="sylvia-logo-login"
                  src={SylviaLogo}
                  alt="Sylvia Logo"
                />
              </div>
            </a>

            <div className="flow-container-1">
              <img
                className="flow-background-1"
                src={FlowBackground}
                alt="Background 1"
                style={{
                  backgroundImage: `url(${FlowBackground})`,
                  backgroundSize: "120%",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "right",
                  marginTop: "15px",
                  display: "flex",
                }}
              />
            </div>
          </div>
        </nav>
      </header>

      <div className="login-form">
        
        <div>
          {isRegistering ? (
            <h2>Create an Account</h2>
          ) : (
            <h2>Login to Your Account</h2>
          )}

          <Form
            name="normal_login"
            className="login-form"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
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
                {isDeleting && <DeleteUserForm handleDeleteUser={handleDeleteUser} />}
              </div>

            </Form.Item>

          </Form>

          <p>
            {isRegistering ? (
              <>
                Already have an account?{" "}
                <Button type="link" onClick={handleToggleRegister}>
                  Log in
                </Button>
              </>
            ) : (
              <>
                Don't have an account?{" "}
                <Button type="link" onClick={handleToggleRegister}>
                  Register
                </Button>
              </>
            )}
          </p>
          
        </div>
      </div>
      
    </>
  );
}

// export default function Login({ setIsAuthenticated }) {
//   const [username, setUsername] = useState("");
//   const navigate = useNavigate();
//   const formRef = useRef(null);

//   const onFinish = (values) => {
//     const { username, password } = values;
//     axios
//       .post("http://localhost:3001/register", { username, password }) // Send a POST request to the registration endpoint
//       .then((res) => {
//         if (res.data.message === "User registered successfully") {
//           // User registration successful, proceed with login
//           axios
//             .post("http://localhost:3001/validatePassword", { username, password })
//             .then((res) => {
//               if (res.data.validation) {
//                 setUsername(username);
//                 setIsAuthenticated(true);
//                 formRef.current.resetFields();
//                 navigate("/Portfolio");
//               } else {
//                 alert(
//                   "Password/username is not correct. Contact the website owner to visit this page."
//                 );
//               }
//             });
//         } else {
//           alert("Username already exists"); // Registration failed, username already exists
//         }
//       })
//       .catch((error) => {
//         console.error(error);
//         alert("Registration failed"); // Registration failed, handle error
//       });

// const onFinish = (values) => {
//   const { username, password } = values;
//   axios
//     .post("http://localhost:3001/validatePassword", { username, password })
//     .then((res) => {
//       if (res.data.validation) {
//         setUsername(username);
//         setIsAuthenticated(true);
//         formRef.current.resetFields();
//         navigate("/Portfolio");
//       } else {
//         alert(
//           "Password/username is not correct. Contact the website owner to visit this page."
//         );
//       }
//     });
//   };

//   const handleLogout = () => {
//     setUsername("");
//     setIsAuthenticated(false);
//   };

//   useEffect(() => {
//     if (!username) {
//       navigate("/Login");
//     }
//   }, [username]);

//   return (
//     <>
//       <header data-bs-theme="dark">
//         <nav className="navbar navbar-expand-lg navbar-dark">
//           <div className="container-fluid">
//             <a className="navbar-brand" href="/">
//               <div className="sylvia-logo-container">
//                 <img
//                   className="sylvia-logo-login"
//                   src={SylviaLogo}
//                   alt="Sylvia Logo"
//                 />
//               </div>
//             </a>

//             <div className="flow-container-1">
//               <img
//                 className="flow-background-1"
//                 src={FlowBackground}
//                 alt="Background 1"
//                 style={{
//                   backgroundImage: `url(${FlowBackground})`,
//                   backgroundSize: "120%",
//                   backgroundRepeat: "no-repeat",
//                   backgroundPosition: "right",
//                   marginTop: "15px",
//                   display: "flex",
//                 }}
//               />
//             </div>
//           </div>
//         </nav>
//       </header>
//     <div
//       className="login-form"
//       style={{
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//       }}
//     >
//       <div>
//         <Form
//           name="normal_login"
//           className="login-form"
//           initialValues={{
//             remember: true,
//           }}
//           onFinish={onFinish}
//           ref={formRef}
//         >
//           <Form.Item
//             name="username"
//             rules={[
//               {
//                 required: true,
//                 message: "Please input Username!",
//               },
//             ]}
//           >
//             <Input
//               prefix={<UserOutlined className="site-form-item-icon" />}
//               placeholder="Username"
//             />
//           </Form.Item>
//           <Form.Item
//             name="password"
//             rules={[
//               {
//                 required: true,
//                 message: "Please input your Password!",
//               },
//             ]}
//           >
//             <Input
//               prefix={<LockOutlined className="site-form-item-icon" />}
//               type="password"
//               placeholder="Password"
//             />
//           </Form.Item>
//           {!username && (
//             <Form.Item>
//               <Button
//                 type="primary"
//                 htmlType="submit"
//                 className="login-form-button"
//               >
//                 Log in
//               </Button>
//             </Form.Item>
//           )}
//           {username && (
//             <div
//               style={{
//                 display: "flex",
//                 justifyContent: "space-between",
//                 alignItems: "center",
//               }}
//             >
//               <Button onClick={handleLogout}>Logout</Button>
//             </div>
//           )}
//         </Form>
//         {username && (
//           <p style={{ color: "white", marginTop: "20px" }}>
//             Welcome to {username || "guest"}
//           </p>
//         )}
//       </div>
//     </div>
//     </>
//   );
// }
