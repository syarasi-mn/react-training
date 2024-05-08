import React, { useState } from "react";
import { Button, Checkbox, Form, Input } from "antd";
import MyTable from "./MyTable";
const ForgotPassword = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  var [email, setEmail] = useState("");
  var [password, setPassword] = useState("");

  function handleEmail(e) {
    setEmail(e.target.value);
  }
  function handlePassword(e) {
    setPassword(e.target.value);
  }
  function signUp() {
    if (email) {
      setList([...list, { email: email, password: password }]);
    }
  }
  function handleDelete(index) {
    console.log(index);
    list.splice(index, 1);
    setList([...list]);
  }
  var [list, setList] = useState([]);
  return (
    <>
      <h1>Forgot Password Page</h1>
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
          onChange={handleEmail}
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
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit" onClick={signUp}>
            Get Reset Link
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};
export default ForgotPassword;
