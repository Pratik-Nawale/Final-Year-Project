// import { Box } from "@mui/material";
import React from "react";
// import Header from "../../comp/Header";
import { Column } from "@ant-design/plots";

import "./board.css"

const columns = [
  {
    title: "SNo",
    dataIndex: "key",
  },
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Product",
    dataIndex: "product",
  },
  {
    title: "Price",
    dataIndex: "Price",
  },
  {
    title: "Status",
    dataIndex: "staus",
  },
];
const data1 = [
  {
    key: 1,
    name: "Jon Snow",
    product : `Rivet Bigelow Modern`,
    Price: `$253`,
    staus: `Delivered`,
  },
  {
    key: 2,
    name: "Cersei Lannister",
    product: `Baltsar Chair`,
    Price: `$89`,
    staus: `Pending`,
  },
  {
    key: 3,
    name: "Jaime Lannister",
    product: `Helmar Chair`,
    Price: `$112`,
    staus: `Delivered`,
  },
  {
    key: 4,
    name: "Jon Snow",
    product: `Realme 8`,
    Price: `$599`,
    staus: `Pending`,
  },
  {
    key: 5,
    name: "Anya Stark",
    product: `One Plus Nord`,
    Price: `$799`,
    staus: `Delivered`,
  },
  {
    key: 6,
    name: "Jon Snow",
    product: `Beat EP Headphones`,
    Price: `$199`,
    staus: `Delivered`,
  },
  {
    key: 7,
    name: "Daenerys Targaryen",
    product: `Realme 8`,
    Price: `$599`,
    staus: `Pending`,
  },
  {
    key: 8,
    name: "Ever Melisandre",
    product: `Beat EP Headphones`,
    Price: `$199`,
    staus: `Pending`,
  },
  {
    key: 9,
    name: "Ferrara Clifford",
    product: `One Plus Nord`,
    Price:`$799`,
    staus: `Delivered`,
  },
  {
    key: 10,
    name: "Rossini Frances",
    product: `Baltsar Chair`,
    Price: `$32`,
    staus: `Pending`,
  },
  {
    key: 11,
    name: "Harvey Roxie",
    product: `Rivet Bigelow Modern`,
    Price: `$253`,
    staus: `Delivered`,
  },
  {
    key: 12,
    name: "Steve Goodman",
    product: `Baltsar Chair`,
    Price: `$89`,
    staus: `Pending`,
  },
  {
    key: 13,
    name: "Jon Snow",
    product: `Realme 8`,
    Price: `$599`,
    staus: `Delivered`,
  },
  {
    key: 14,
    name: "Ever Melisandre",
    product: `Baltsar Chair`,
    Price: `$89`,
    staus: `Pending`,
  },
];

const board = () => {
  const data = [
    {
      type: "Jan",
      sales: 38,
    },
    {
      type: "Feb",
      sales: 52,
    },
    {
      type: "Mar",
      sales: 61,
    },
    {
      type: "Apr",
      sales: 145,
    },
    {
      type: "May",
      sales: 48,
    },
    {
      type: "Jun",
      sales: 38,
    },
    {
      type: "July",
      sales: 38,
    },
    {
      type: "Aug",
      sales: 38,
    },
    {
      type: "Sept",
      sales: 38,
    },
    {
      type: "Oct",
      sales: 38,
    },
    {
      type: "Nov",
      sales: 38,
    },
    {
      type: "Dec",
      sales: 38,
    },
  ];
  const config = {
    data,
    xField: "type",
    yField: "sales",
    color: ({ type }) => {
      return "#ffd333";
    },
    label: {
      position: "middle",
      style: {
        fill: "#FFFFFF",
        opacity: 1,
      },
    },
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    meta: {
      type: {
        alias: "Month",
      },
      sales: {
        alias: "Income",
      },
    },
  };
  return (
    <div className=" p-4">
      <h3 className="mb-4 title">Dashboard</h3>
      <div className="d-flex justify-content-between align-items-center gap-3">
        <div className="d-flex justify-content-between align-items-end flex-grow-1 bg-white p-3 roudned-3">
          <div>
            <p className="desc">Total</p>
            <h4 className="mb-0 sub-title">$1100</h4>
          </div>
          <div className="d-flex flex-column align-items-end">
            <h6>
               32%
            </h6>
            <p className="mb-0  desc">Compared To April 2022</p>
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-end flex-grow-1 bg-white p-3 roudned-3">
          <div>
            <p className="desc">Total</p>
            <h4 className="mb-0 sub-title">$1100</h4>
          </div>
          <div className="d-flex flex-column align-items-end">
            <h6 className="red">
              32%
            </h6>
            <p className="mb-0  desc">Compared To April 2022</p>
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-end flex-grow-1 bg-white p-3 roudned-3">
          <div>
            <p className="desc">Total</p>
            <h4 className="mb-0 sub-title">$1100</h4>
          </div>
          <div className="d-flex flex-column align-items-end">
            <h6 className="green">
               32%
            </h6>
            <p className="mb-0 desc">Compared To April 2022</p>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <h3 className="mb-5 title">Income Statics</h3>
        <div>
          <Column {...config} />
        </div>
      </div>

    </div>
  );
};

export default board;
