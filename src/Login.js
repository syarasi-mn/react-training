import React, { useState } from "react";
import { Alert, Button, Checkbox, Form, Input } from "antd";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  var [error, setError] = useState();
  const navigate = useNavigate();
  const onFinish = (values) => {
    axios({
      url: "http://apibyauw.eu-4.evennode.com/api" + "/login",
      method: "post",
      data: { email: values.username, password: values.password },
    }).then(
      (response) => {
        console.log(response);
        localStorage.setItem("token", response.data.token);
        navigate("/");
      },
      (err) => {
        console.log(err);
        alert(err);
      }
    );
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div style={{ className: "App" }}>
      <h1>Login Page</h1>
      {error && <Alert type="danger" message={error}></Alert>}
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Login
          </Button>
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Link to="/forgot">
            <Button type="primary" htmlType="submit">
              Forgot Password
            </Button>
          </Link>
        </Form.Item>
      </Form>
    </div>
  );
};
export default Login;
