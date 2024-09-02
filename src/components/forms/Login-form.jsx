"use client";
import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Clear any previous error messages
    setError("");

    try {
      const res = await fetch(
        "https://cyparta-backend-gf7qm.ondigitalocean.app/api/login/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzI3ODA2MDk1LCJpYXQiOjE3MjUyMTQwOTUsImp0aSI6IjRiOWMxMzU1ZGViYTQzZGNiMzVjYmFlM2EwZTlkNGE1IiwidXNlcl9pZCI6MjJ9.G0xv6s4XArnqzcFD_byjUcciTYVyCa_07nzhp7EWSNU",
          },
          body: JSON.stringify({ ...formData }),
        }
      );

      if (res.ok) {
        // Redirect to dashboard or another page after successful login
        router.push("/profile");
      } else {
        // Handle error response (e.g., invalid credentials)
        const data = await res.json();
        console.log(data);
        setError(data.detail || "Something went wrong");
      }
    } catch (err) {
      console.error("Login error:", error);
      setError("Failed to log in. Please try again.");
    }
  };

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
