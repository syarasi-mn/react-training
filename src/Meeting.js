import React, { useState } from "react";
import { Row, Button } from "antd";

export default function Meeting() {
  var [list, updateList] = useState([]);
  var [name, setName] = useState("");
  function markAttandence() {
    updateList([...list, name]);
  }
  function updateName(e) {
    setName(e.target.value);
  }
  return (
    <div>
      <label>Enter name</label>
      <input onChange={updateName}></input>
      <Button onClick={markAttandence}> Mark Attandance</Button>
      <div>
        {list.map((n) => (
          <Row style={{ height: 100, width: 100 }}>{n}</Row>
        ))}
      </div>
    </div>
  );
}
