import React, { useState } from "react";
import { Form, Input, Button } from "antd";
import { UserOutlined } from "@ant-design/icons";

export default function DeleteUserForm ({ handleDeleteUser }) {
  const [deleteUsername, setDeleteUsername] = useState("");

  const handleConfirmDelete = () => {

    handleDeleteUser(deleteUsername);
  };

  return (
    <div>
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
          onChange={(e) => setDeleteUsername(e.target.value)}
        />
      </Form.Item>
      <Form.Item>
        <Button
          type="primary"
          danger
          htmlType="submit"
          className="login-form-button"
          onClick={handleConfirmDelete}
        >
          Delete User
        </Button>
      </Form.Item>
    </div>
  );
}