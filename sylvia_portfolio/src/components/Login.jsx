import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "antd/dist/reset.css";
import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import axios from "axios";

import FlowBackground from "../images/Flow_backgroung.jpg";
import SylviaLogo from "../images/sylvia-bachiegga-high-resolution-logo-black-on-transparent-background.png";

export default function Login({ setIsAuthenticated }) {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  const formRef = useRef(null);

  const onFinish = (values) => {
    const { username, password } = values;
    axios
      .post("http://localhost:3001/validatePassword", { username, password })
      .then((res) => {
        if (res.data.validation) {
          setUsername(username);
          setIsAuthenticated(true);
          formRef.current.resetFields();
          navigate("/Portfolio");
        } else {
          alert(
            "Password/username is not correct. Contact the website owner to visit this page."
          );
        }
      });
  };

  const handleLogout = () => {
    setUsername("");
    setIsAuthenticated(false);
  };

  useEffect(() => {
    if (!username) {
      navigate("/Login");
    }
  }, [username]);

  return (
    <>
      <header data-bs-theme="dark">
        <nav className="navbar navbar-expand-lg navbar-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              <div className="sylvia-logo-container">
                <img
                  className="sylvia-logo-portfolio"
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
          {!username && (
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
        {username && (
          <p style={{ color: "white", marginTop: "20px" }}>
            Welcome to {username || "guest"}
          </p>
        )}
      </div>
    </div>
    </>
  );
}




