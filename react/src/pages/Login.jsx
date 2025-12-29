import React, { useState } from "react";

const Login = () => {
  const user = {
    email: "asdfasdf@gmail.com",
    password: "asdhfjahsdf",
  };
  const init = {
    email: "",
    password: "",
  };
  const [formData, setFormData] = useState(init);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.email === "") {
      return alert("Email is empty.");
    }

    if (formData.password.length < 8) {
      return alert("Password should be of 8 char..");
    }

    console.log(formData);
    setFormData(init);
  };
  return (
    <div className="grid place-items-center h-screen">
      <form
        onSubmit={handleSubmit}
        action=""
        className="w-[32rem] flex flex-col p-8 gap-6 shadow-2xl rounded-xl"
      >
        <h1 className="text-4xl font-bold">Login</h1>
        <input
          onChange={handleChange}
          type="email"
          placeholder="Enter Email"
          className="p-2 rounded-md w-full"
          name="email"
          value={formData.email}
        />
        <input
          onChange={handleChange}
          type="password"
          placeholder="Enter Password"
          className="p-2 rounded-md w-full"
          name="password"
          value={formData.password}
        />
        <span className="underline text-end cursor-pointer">
          forget password?
        </span>
        <button
          type="submit"
          className="font-bold cursor-pointer text-white w-full p-2 rounded-md bg-blue-500"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
