import axios from "axios";
import React, { useState, useEffect } from "react";
import { Card } from "antd";
export default function Cart() {
  var [cakes, setCakes] = useState([]);
  useEffect(() => {
    axios({
      url: "http://apibyauw.eu-4.evennode.com/api" + "/cakecart",
      method: "get",
      headers: {
        Authorization: localStorage.getItem("token"), // that token which u got while logiing in
      },
    }).then((response) => {
      setCakes(response.data.data)});
  }, []);

  return (
    <div>
      {cakes.map((cake) => {
        return (
          <Card
            hoverable
            style={{
              width: 240,
              height: 300,
              margin: 10,
            }}
            cover={<img alt="temp" src={cake.image} />}
          >
            <p>Name: {cake.name}</p>
            <p>Price: {cake.price}</p>
            <p>Quantity: {cake.quantity}</p>
            <p>Weight: {cake.weight}</p>
          </Card>
        );
      })}
    </div>
  );
}
