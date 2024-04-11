import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useAuth } from "../authContext";
import { Header, Footer } from "../helpers.jsx";
import "../styles/adminLogin.css";

const AdminLogin = () => {
  const navigate = useNavigate();
  const { setIsAdminAuthenticated } = useAuth(); // Get the setter from the context
  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    try {
      setLoading(true);
      const { username, password } = values;
      const response = await axios.post("http://localhost:3001/adminLogin", {
        username,
        password,
      });
      if (response.data.isAdmin) {
        setIsAdminAuthenticated(true); // Set admin authentication
        navigate("/Admin");
      } else {
        alert("Invalid credentials or not an admin.");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Login failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />

      <div className="admin-login-form-container">
      <h2>Admin Page</h2>
        <Form
          name="admin_login"
          onFinish={onFinish}
          className="admin-login-form"
          initialValues={{ remember: true }}
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: "Please input your Username!" }]}
            className="admin-form-item"
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your Password!" }]}
            className="admin-form-item"
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
              className="admin-login-form-button"
              loading={loading}
            >
              Log in
            </Button>
          </Form.Item>
        </Form>
      </div>
      <Footer/>
    </>
  );
};

export default AdminLogin;
