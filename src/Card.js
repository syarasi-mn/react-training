import React from "react";
import { Card } from "antd";
const { Meta } = Card;
const App = () => (
  <Card
    hoverable
    style={{
      width: 240,
    }}
    cover={
      <img
        alt="example"
        src="https://upload.wikimedia.org/wikipedia/id/thumb/e/e0/Iron_Man_bleeding_edge.jpg/250px-Iron_Man_bleeding_edge.jpg"
      />
    }
  >
    <Meta title="Europe Street beat" description="www.instagram.com" />
  </Card>
);
export default App;
