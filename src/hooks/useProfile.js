"use client";
import { useEffect, useState } from "react";

const useProfile = () => {
  const [activeTab, setActiveTab] = useState("personal");
  const [userData, setUserData] = useState(null);
  const [editState, setEditState] = useState(false);

  const editStateHandler = () => {
    setEditState(!editState);
  };

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(
          "https://cyparta-backend-gf7qm.ondigitalocean.app/api/profile/",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzI3ODA2MDk1LCJpYXQiOjE3MjUyMTQwOTUsImp0aSI6IjRiOWMxMzU1ZGViYTQzZGNiMzVjYmFlM2EwZTlkNGE1IiwidXNlcl9pZCI6MjJ9.G0xv6s4XArnqzcFD_byjUcciTYVyCa_07nzhp7EWSNU",
            },
          }
        );
        if (response.ok) {
          const data = await response.json();
          setUserData(data);
        } else {
          console.error("Failed to fetch protected data");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchUser();
  }, [editState]);

  return {
    activeTab,
    setActiveTab,
    userData,
    setUserData,
    editState,
    setEditState,
    editStateHandler,
  };
};

export default useProfile;
