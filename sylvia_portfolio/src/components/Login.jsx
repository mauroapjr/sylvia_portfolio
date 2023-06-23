import React, { useState, useRef } from "react";
import "antd/dist/reset.css";
import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import axios from "axios";

export default function Login({ setIsAuthenticaded }) {
  const [username, setUsername] = useState("");
  const formRef = useRef(null);

  const onFinish = (values) => {
    const { username, password } = values;
    axios
      .post("http://localhost:3001/validatePassword", { username, password })
      .then((res) => {
        if (res.data.validation) {
          // console.log(username);
          setUsername(username);
          setIsAuthenticaded(true);
          // alert("Username/password matches");
          formRef.current.resetFields();
        } else {
          alert(
            "Password/username is not correct. Contact the website owner to visit this page."
          );
        }
      });
  };

  const handleLogout = () => {
    setUsername("");
    setIsAuthenticaded(false);
  };

  return (
    <div
      className=""
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
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
            {username ? null : (
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Log in
            </Button>
          </Form.Item>
            )}
          {username && (
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Button onClick={handleLogout}>Logout</Button>
            </div>
          )}
        </Form>
        {username && <p style={{ color: "white", marginTop: "20px" }}>Welcome to {username}</p>}
      </div>
    </div>
  );
}
