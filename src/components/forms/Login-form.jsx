"use client";
import React from "react";
// create custom hook to handle programming logic

import useLogin from "@/hooks/useLogin";

const LoginForm = () => {
  // create custom hook to handle programming logic
  const { formData, error, handleChange, handleSubmit } = useLogin();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w=[50%]">
      <img src="cyparta.png" alt="" className="w-56 mb-16" />
      <div className=" bg-white p-8 rounded-lg shadow-lg w-[616px] h-[489px]">
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form
          className="flex flex-col justify-center h-full w-full"
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold">
              Email Address
            </label>
            <input
              name="email"
              type="email"
              id="email"
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={formData.email}
              onChange={(e) => handleChange(e)}
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 font-bold">
              Password
            </label>
            <input
              name="password"
              type="password"
              id="password"
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={formData.password}
              onChange={(e) => handleChange(e)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-[70%] self-center mt-8  bg-slate-800 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
