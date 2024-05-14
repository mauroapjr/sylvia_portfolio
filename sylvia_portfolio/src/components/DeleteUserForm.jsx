import React, { useState } from "react";
import { Form, Input, Button } from "antd";
import { UserOutlined } from "@ant-design/icons";

export default function DeleteUserForm({ handleDeleteUser }) {
  const [form] = Form.useForm();

  const handleConfirmDelete = () => {
    form
      .validateFields()
      .then((values) => {
        handleDeleteUser(values.deleteUsername);
        form.resetFields();
      })
      .catch((info) => {
        console.log("Validate Failed:", info);
      });
  };

  return (
    <Form form={form}>
      <h2>Delete User</h2>
      <Form.Item
        name="deleteUsername"
        rules={[
          {
            required: true,
            message: "Please enter the username to delete",
          },
        ]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Username"
        />
      </Form.Item>
      <Form.Item>
        <Button
          type="primary"
          danger
          onClick={handleConfirmDelete}
          className="login-form-button"
        >
          Delete User
        </Button>
      </Form.Item>
    </Form>
  );
}
