import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleProduct = () => {
  const { id } = useParams();
  console.log(parseInt(id));
  const [data, setData] = useState({});

  const getData = async () => {
    await axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        console.log(res);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="w-full h-1/2">
        <img src={data?.image} alt="" />
      </div>
      <h1>{data?.title}</h1>
      <p>{data?.description}</p>
      <span>{data?.price}</span>
    </>
  );
};

export default SingleProduct;
