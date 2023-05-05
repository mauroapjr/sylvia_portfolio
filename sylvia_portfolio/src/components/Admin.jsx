import React from "react";
import "../main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import "antd/dist/reset.css";
import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import axios from "axios";

const { TextArea } = Input;



export default function Admin() {
  const onFinish = async (values) => {
    try {
      const response = await axios.post('http://localhost:3001/blog.db', {
        title: values.title,
        content: values.content,
      });

      console.log('Created post:', response.data);
    } catch (error) {
      console.error('Failed to create post:', error);
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
          marginTop: 50,
        }}
      >
        <Form
      name="post_form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      style={{ width: "50%" }}
    >
      <Form.Item
        label="Title"
        name="title"
        rules={[
          {
            required: true,
            message: "Please input the post title!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Content"
        name="content"
        rules={[
          {
            required: true,
            message: "Please input the post content!",
          },
        ]}
      >
        <TextArea rows={20} />
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

