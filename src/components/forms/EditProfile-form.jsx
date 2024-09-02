"use client";
import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const EditProfileForm = ({ userData, setEditState }) => {
  const [userInfo, setUserInfo] = useState("");
  const router = useRouter();

  useEffect(() => {
    setUserInfo({ ...userData });
  }, [userData]);

  const changeHandler = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://cyparta-backend-gf7qm.ondigitalocean.app/api/profile/",
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzI3ODA2MDk1LCJpYXQiOjE3MjUyMTQwOTUsImp0aSI6IjRiOWMxMzU1ZGViYTQzZGNiMzVjYmFlM2EwZTlkNGE1IiwidXNlcl9pZCI6MjJ9.G0xv6s4XArnqzcFD_byjUcciTYVyCa_07nzhp7EWSNU",
          },
          body: JSON.stringify({
            first_name: userInfo.first_name,
            last_name: userInfo.last_name,
            email: userInfo.email,
            phone: userInfo.phone,
            bio: userInfo.bio,
          }),
        }
      );
      if (response.ok) {
        setEditState(false);
      } else {
        console.error("Failed to update  data");
      }
    } catch (error) {
      console.error("Error updating data:", error);
    }
  };

  return (
    <div>
      <form className="mt-4" onSubmit={(e) => submitHandler(e)}>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-500">First Name</label>
            <input
              name="first_name"
              className="font-bold border-[1px] p-2 rounded-lg focus:outline-none focus:border-red-700"
              value={userInfo.first_name}
              onChange={(e) => changeHandler(e)}
            />
          </div>
          <div>
            <label className="block text-gray-500">Last Name</label>
            <input
              name="last_name"
              className="font-bold border-[1px] p-2 rounded-lg focus:outline-none focus:border-red-700"
              value={userInfo.last_name}
              onChange={(e) => changeHandler(e)}
            />
          </div>
          <div>
            <label className="block text-gray-500">Email</label>
            <input
              name="email"
              className="font-bold border-[1px] p-2 rounded-lg focus:outline-none focus:border-red-700"
              value={userInfo.email}
              onChange={(e) => changeHandler(e)}
            />
          </div>
          <div>
            <label className="block text-gray-500">Phone</label>
            <input
              name="phone"
              className="font-bold border-[1px] p-2 rounded-lg focus:outline-none focus:border-red-700"
              value={userInfo.phone}
              onChange={(e) => changeHandler(e)}
            />
          </div>
          <div>
            <label className="block text-gray-500">Bio</label>
            <input
              name="bio"
              className="font-bold border-[1px] p-2 rounded-lg focus:outline-none focus:border-red-700"
              value={userInfo.bio}
              onChange={(e) => changeHandler(e)}
            />
          </div>
          <div>
            <input
              type="submit"
              className="bg-slate-800 py-4 px-8 rounded-lg text-slate-50 cursor-pointer"
              value="Submit"
            />
          </div>
          {/* Add other fields here */}
        </div>
      </form>
    </div>
  );
};

export default EditProfileForm;
