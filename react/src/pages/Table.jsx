import axios from "axios";
import { useEffect, useState } from "react";
import { MdEditSquare } from "react-icons/md";
import { FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const Table = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
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

  const handleDelete = async (id) => {
    await axios
      .delete(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        console.log(res);
        toast.success("Product deleted successfully");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base border border-default">
      <table className="w-full text-sm text-left rtl:text-right text-body">
        <thead className="bg-neutral-secondary-soft border-b border-default">
          <tr>
            <th scope="col" className="px-6 py-3 font-medium">
              Image
            </th>
            <th scope="col" className="px-6 py-3 font-medium">
              Product name
            </th>
            <th scope="col" className="px-6 py-3 font-medium">
              Description
            </th>
            <th scope="col" className="px-6 py-3 font-medium">
              Category
            </th>
            <th scope="col" className="px-6 py-3 font-medium">
              Price {"(Rs)"}
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
                  <img src={item.image} alt="" className="h-10 w-10" />
                </th>
                <td className="px-6 py-4 ">{item.title}</td>
                <td className="px-6 py-4">
                  {item.description.slice(0, 60)}...
                </td>
                <td className="px-6 py-4">{item.category}</td>
                <td className="px-6 py-4">{item.price}</td>
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

export default Table;
