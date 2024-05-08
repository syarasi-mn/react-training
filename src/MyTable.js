import React, { useState, useEffect } from "react";
import { Button, Space, Table, Tag } from "antd";
import { useNavigate } from "react-router-dom";
export default function MyTable(props) {
  const navigate = useNavigate();
  var [dataSource, setDataSource] = useState([
    {
      id: 1,
      name: "afkhan",
      age: 23,
      location: "hyderbad",
    },
    {
      id: 2,
      name: "xyz",
      age: 23,
    },
    {
      id: 3,
      name: "abc",
      age: 23,
      location: "hyderbad",
      role: "dev",
    },
  ]);
  // var dataSource = [...props.data];
  var keys = [];
  dataSource.forEach((row, index) => {
    keys.push(...Object.keys(row));
  });

  keys = new Set(keys);

  var columns = [];
  keys.forEach((each) => {
    columns.push({
      title: each.toUpperCase(),
      dataIndex: each,
      key: each,
    });
  });
  columns.push({
    title: "Action",
    render: (text, record, index) => {
      return (
        <Button
          onClick={() => {
            navigate("/edit/" + index);
          }}
        >
          Edit
        </Button>
      );
    },
    key: "delete",
  });
  return <Table dataSource={dataSource} columns={columns} />;
}
