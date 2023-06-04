import React, { useState, useRef } from "react";
import ReactQuill from "react-quill";
import axios from "axios";
import { Form, Input, Button, message } from "antd";
import { ImageFileResizer } from "react-image-file-resizer";

import "../styles/main.css";
import "../styles/admin.css";
import "react-quill/dist/quill.snow.css";
import "react-quill/dist/quill.bubble.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "antd/dist/reset.css";

const { TextArea } = Input;

export default function Admin() {
  const [form] = Form.useForm();
  const [content, setContent] = useState({ text: "", paragraphs: [] });
  const [base64data, setBase64data] = useState(null);
  const editorRef = useRef();

  const onChange = (value) => {
    const delta = value.delta || {};
    const content = delta.ops || [];

    const paragraphs = content
      .filter((op) => typeof op.insert === "string" && op.insert.trim() !== "")
      .map((op) => op.insert.trim());
    setContent({ text: value, paragraphs: paragraphs });
  };

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

  const onFinish = async (values) => {
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
      <link
        rel="canonical"
        href="https://getbootstrap.com/docs/5.3/examples/album/"
      ></link>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
        rel="stylesheet"
      ></link>
      <script src="../assets/dist/js/bootstrap.bundle.min.js"></script>
      <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"></script>

      <header data-bs-theme="dark">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                aria-hidden="true"
                className="me-2"
                viewBox="0 0 24 24"
              >
                <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
                <circle cx="12" cy="13" r="4"></circle>
              </svg>

              <strong>Sylvia</strong>
              <h6>Learning Experience Designer</h6>
            </a>
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
            onFinish={(values) => onFinish(values, form)}
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
    </>
  );
}
