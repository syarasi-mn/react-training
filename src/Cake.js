import React, { useState, useEffect } from "react";
import { Badge, Button, Card } from "antd";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import { Spin } from "antd";

export default function Cake() {
  var [params, setParams] = useSearchParams();
  var [cake, setCake] = useState({});
  var [loading, setLoading] = useState(true);
  useEffect(() => {
    console.log(params);
    axios({
      url:
        "http://apibyauw.eu-4.evennode.com/api" + "/cake/" + params.get("id"),
      method: "get",
    }).then(
      (response) => {
        setCake(response.data.data);
        setLoading(false);
      },
      (err) => console.log(err)
    );
  }, [params]);
  if (loading) return;

  function addToCart() {
    var requestJson = {
      name: cake.name,
      cakeid: cake.cakeid,
      price: cake.price,
      image: cake.image,
      weight: 1,
    };
    axios({
      url: "http://apibyauw.eu-4.evennode.com/api" + "/addcaketocart",
      method: "post",
      data: requestJson,
      headers: {
        Authorization: localStorage.getItem("token"), // that token which u got while logiing in
      },
    }).then((response) => alert("Added to cart"));
  }

  if (loading) return <Spin />;
  else
    return (
      <>
        {loading ? (
          <Spin size="large"></Spin>
        ) : (
          <>
            <Card
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
            <Button onClick={addToCart}>Add to Cart</Button>
          </>
        )}
      </>
    );
}
