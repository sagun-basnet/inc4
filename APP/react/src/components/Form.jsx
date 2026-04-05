import React from "react";

const Form = ({ title }) => {
  return (
    <div className="h-screen grid place-items-center">
      <form
        action=""
        className="w-[28rem] shadow-2xl p-12 rounded-lg flex flex-col gap-2"
      >
        <h1 className="">{title}</h1>
        {title !== "Login" && (
          <>
            <input placeholder="Enter You Name" type="text" name="name" id="" />
            <input
              placeholder="Enter You Address"
              type="text"
              name="address"
              id=""
            />
            <input
              placeholder="Enter You Phone"
              type="number"
              name="phone"
              id=""
            />
          </>
        )}
        <input placeholder="Enter You Email" type="email" name="email" id="" />
        <input
          placeholder="Enter You Password"
          type="password"
          name="pass"
          id=""
        />
        <input
          className="bg-blue-600 cursor-pointer text-white"
          type="submit"
          value={`${title}`}
        />
      </form>
    </div>
  );
};

export default Form;
