import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Button, Menu } from "antd";
import Search from "antd/es/input/Search";

const Nav = () => {
  const items = [
    {
      label: <Link to="/login">Login</Link>,
      key: "login",
      icon: <MailOutlined />,
    },
    {
      label: <Link to="/signup">Signup</Link>,
      key: "signup",
      icon: <AppstoreOutlined />,
    },
    {
      label: <Link to="/table">Table</Link>,
      key: "table",
      icon: <AppstoreOutlined />,
    },
    {
      // label: "Search Cakes",
      key: "search",
      icon: <Search onSearch={handleSearch} onChange={handleParams} />,
    },
    {
      label: <Link to="/cart">Cart</Link>,
      key: "cart",
      icon: <AppstoreOutlined />,
    },
  ];
  var navigate = useNavigate();
  var [params, setParams] = useState("");
  function handleParams(e) {
    setParams(e.target.value);
  }
  function handleSearch() {
    navigate("/search" + "?name=" + params);
  }
  const [current, setCurrent] = useState("mail");
  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
    />
  );
};
export default Nav;
