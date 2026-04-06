import axios from "axios";
import React from "react";
import { useState } from "react";

const FileHandling = () => {
  const [file, setFile] = useState(null);
  //   const [textData, setTextData] = useState({
  //     name: "",
  //     email: "",
  //   });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", file);
    await axios
      .post("http://localhost:5555/upload-image", formData)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <form onSubmit={handleSubmit} method="post" encType="multipart/form-data">
        {/* <input
          onChange={(e) => setName(e.target.value)}
          type="text"
          name="name"
          id=""
        /> */}
        <input
          onChange={(e) => setFile(e.target.files[0])}
          type="file"
          name="image"
          id=""
        />
        <button className="p-3 px-4 rounded-md bg-blue-600" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default FileHandling;
