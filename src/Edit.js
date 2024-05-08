import { Row } from "antd";
import React, { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import data from "./data.json";

export default function Edit() {
  const navigate = useNavigate();
  const params = useParams();
  console.log(params);
  console.log(data);
  var person = data.filter((each) => each.id === Number.parseInt(params.id))[0];
  console.log(person);
  var [user, setUser] = useState(person);
  function saveName(e) {
    user.name = e.target.value;
    setUser(user);
  }
  function saveAge(e) {
    user.age = e.target.value;
    setUser(user);
  }
  function saveLoc(e) {
    user.location = e.target.value;
    setUser(user);
  }
  function handleEdit() {
    // location.handleEdit(location.index, user);
    // navigate("/table");
  }

  return (
    <div>
      <div>
        <Row>
          <label>ID {user && user.id}</label>
        </Row>
        <label>Name</label>
        <input placeholder={user && user.name} onChange={saveName}></input>
        <label>age</label>
        <input placeholder={user && user.age} onChange={saveAge}></input>
        <label>location</label>
        <input placeholder={user && user.location} onChange={saveLoc}></input>
        <button onClick={handleEdit}>Save</button>
      </div>
    </div>
  );
}
