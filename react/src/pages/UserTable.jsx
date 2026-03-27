import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";
import { MdEditSquare } from "react-icons/md";
import { Link } from "react-router-dom";

const UserTable = () => {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    await axios
      .get("http://localhost:5555/select-user")
      .then((res) => {
        console.log(res);
        setData(res.data.result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base border border-default">
      <table className="w-full text-sm text-left rtl:text-right text-body">
        <thead className="bg-neutral-secondary-soft border-b border-default">
          <tr>
            <th scope="col" className="px-6 py-3 font-medium">
              ID
            </th>
            <th scope="col" className="px-6 py-3 font-medium">
              User name
            </th>
            <th scope="col" className="px-6 py-3 font-medium">
              User Phone
            </th>
            <th scope="col" className="px-6 py-3 font-medium">
              Email
            </th>
            <th scope="col" className="px-6 py-3 font-medium">
              Password
            </th>
            <th scope="col" className="px-6 py-3 font-medium">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item, index) => {
            return (
              <tr
                key={index}
                className="odd:bg-neutral-primary even:bg-neutral-secondary-soft border-b border-default"
              >
                <th scope="row" className="px-6 py-4 ">
                  {item.id}
                </th>
                <td className="px-6 py-4 ">{item.name}</td>
                <td className="px-6 py-4">{item.phone}</td>
                <td className="px-6 py-4">{item.email}</td>
                <td className="px-6 py-4">{item.password}</td>
                <td className="px-6 py-4 flex gap-4">
                  <Link to={`/edit-product/${item.id}`}>
                    <button className="p-2 px-4 bg-blue-500 rounded-md cursor-pointer">
                      <MdEditSquare />
                    </button>
                  </Link>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="p-2 px-4 bg-red-500 rounded-md cursor-pointer"
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
