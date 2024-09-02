"use client";
import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";

const useLogin = () => {
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
  return {formData,setFormData,error,setError,router,handleChange,handleSubmit};
};

export default useLogin;
