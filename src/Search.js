import { Button, Card, Row } from "antd";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { Outlet, useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Categories from "./Categories";
import { Spin } from "antd";

export default function Search() {
  const navigate = useNavigate();
  var [params, setParams] = useSearchParams();
  var [cakes, setcakes] = useState([]);
  function handleCakeSelection(id) {
    navigate("cake/?id=" + id);
  }
  useEffect(() => {
    axios({
      url: "http://apibyauw.eu-4.evennode.com/api" + "/allCakes",
      method: "get",
    }).then(
      (response) => {
        var search = params.get("name");
        if (!search) search = "";
        cakes = response.data.data.filter((cake) =>
          cake.name.toLowerCase().includes(search.toLowerCase())
        );
        setcakes(cakes);
      },
      (err) => console.log(err)
    );
  }, [params]);
  function showCategories() {
    navigate("categories");
  }

  console.log(params);
  return (
    <div>
      <Button onClick={showCategories}>Show Categories</Button>
      <Outlet />
      <Row
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {cakes.map((cake) => {
          return (
            <Card
              onClick={() => handleCakeSelection(cake.cakeid)}
              hoverable
              style={{
                width: 240,
                height: 300,
                margin: 10,
              }}
              cover={<img alt="temp" src={cake.image} />}
            >
              <p>{cake.name}</p>
              <p>{cake.price}</p>
            </Card>
          );
        })}
      </Row>
    </div>
  );
}
