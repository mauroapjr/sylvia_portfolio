import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "antd/dist/reset.css";
import { Form, Input, Button, message } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Header, Footer } from "../helpers.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import axios from "axios";
import { useAuth } from '../authContext';  
import "../styles/login.css";

export default function Login() {
  const { setIsAuthenticated } = useAuth();
  const [isRegistering, setIsRegistering] = useState(false);
  const navigate = useNavigate();
  const formRef = useRef(null);

  const onFinish = (values) => {
    const { username, password } = values;
    // Login logic only
    axios.post("http://localhost:3001/validatePassword", { username, password })
      .then((res) => {
        if (res.data.validation) {
          setIsAuthenticated(true);
          formRef.current.resetFields();
          navigate("/Portfolio");  // Adjust as necessary to navigate post-login
        } else {
          message.error("Password/username is not correct.");
        }
      })
      .catch((error) => {
        console.error("Login failed", error);
        message.error("Login failed");
      });
  };
  

  // const onFinish = (values) => {
  //   const { username, password } = values;
  //   if (isRegistering) {
  //     // Registration logic
  //     axios
  //       .post("http://localhost:3001/register", { username, password })
  //       .then((res) => {
  //         if (res.data.message === "User registered successfully") {
  //           setIsRegistering(false);
  //           formRef.current.resetFields();
  //           message.success("Registration successful! You can now log in.");
  //         } else {
  //           message.error("Username already exists");
  //         }
  //       })
  //       .catch((error) => {
  //         console.error(error);
  //         message.error("Registration failed");
  //       });
  //   } else {
  //     // Login logic
  //     axios
  //       .post("http://localhost:3001/validatePassword", { username, password })
  //       .then((res) => {
  //         if (res.data.validation) {
  //           setIsAuthenticated(true);
  //           formRef.current.resetFields();
  //           navigate("/Portfolio");
  //         } else {
  //           message.error("Password/username is not correct.");
  //         }
  //       })
  //       .catch((error) => {
  //         console.error(error);
  //         message.error("Login failed");
  //       });
  //   }
  // };

  return (
    <>
      <Header />
      <main>
        <div className="login-form" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <div>
            {isRegistering ? <h2>Create an Account</h2> : <h2>Login to my Portfolio</h2>}

            <Form
              name="normal_login"
              className="login-form"
              initialValues={{ remember: true }}
              onFinish={onFinish}
              ref={formRef}
            >
              <Form.Item
                name="username"
                rules={[{ required: true, message: "Please input Username!" }]}
              >
                <Input prefix={<UserOutlined />} placeholder="Username" />
              </Form.Item>

              <Form.Item
                name="password"
                rules={[{ required: true, message: "Please input your Password!" }]}
              >
                <Input
                  prefix={<LockOutlined />}
                  type="password"
                  placeholder="Password"
                />
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">
                  {isRegistering ? "Register" : "Login"}
                </Button>
              </Form.Item>
            </Form>

            <p>
              Don't have a Login and want to know more about my work experience?
              Contact me:{" "}
              <a href="mailto:sylvia.bachiegga@hotmail.com" className="text-white">
                <FontAwesomeIcon icon={faEnvelope} size="2xl" style={{ color: "#343a40" }} />
              </a>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
