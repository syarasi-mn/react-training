import React, { useState } from "react";
import { Button, Checkbox, Form, Input } from "antd";
import { Link } from "react-router-dom";
import MyTable from "./MyTable";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Signup = () => {
  const navigate = useNavigate();
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
      // setList([...list, { email: email, password: password }]);
      axios({
        url: "http://apibyauw.eu-4.evennode.com/api" + "/register",
        method: "post",
        data: { name: "temp", email: email, password: password },
      }).then(
        (response) => {
          console.log(response);
          navigate("/login");
        },
        (err) => {
          console.log(err);
          alert(err);
        }
      );
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
      <h1>Signup Page</h1>
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
          label="Password"
          name="password"
          onChange={handlePassword}
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
          label="Re Enter Password"
          name="password"
          onChange={handlePassword}
          rules={[
            {
              required: true,
              message: "Please re eter your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit" onClick={signUp}>
            SIGN UP
          </Button>
        </Form.Item>
      </Form>
      {/* <MyTable data={list} delete={handleDelete} /> */}
    </>
  );
};
export default Signup;
