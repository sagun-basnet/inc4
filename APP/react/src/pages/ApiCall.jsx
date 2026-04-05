import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ApiCall = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    // try {
    //   const product = await axios.get("https://fakestoreapi.com/products");
    // } catch (err) {
    //   console.log(err);
    // }

    await axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(data);

  return (
    <>
      <div className="grid grid-cols-3 gap-2">
        {data?.map((item, index) => {
          return (
            <Link to={`/single-product/${item.id}`}>
              <div className="border-2 " key={item.id}>
                <div className="h-30 w-full">
                  <img className="h-full w-full" src={item.image} alt="image" />
                </div>
                <h1>{item.title}</h1>
                <p>{item.description}</p>
                <span>Price: {item.price}</span>
                <span>category: {item.category}</span>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default ApiCall;
