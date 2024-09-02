"use client";
import { useState, useEffect } from "react";
import { ProfileHeader } from "./ProfileHeader";
import { Tabs } from "./Tabs";
import { InformationSection } from "./InformationSection";
import EditProfileForm from "../forms/EditProfile-form";
import Header from "../header/Header";

const Profile = () => {
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

  if (!userData) {
    return <h2> please login to show profile information</h2>;
  }
  // if (userData)
  if (userData) {
    if (editState) {
      return (
        <div>
          <Header image={userData.cover} />
          <div className="flex  justify-center min-h-screen ">
            <main className="flex-grow py-12  ">
              <ProfileHeader
                name={`${userData.first_name} ${userData.last_name}`}
                role={userData.bio}
                email={userData.email}
                image={userData.cover}
                editState={editState}
                editStateHandler={editStateHandler}
              />
              <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
              {activeTab === "personal" && (
                <EditProfileForm
                  userData={userData}
                  setEditState={setEditState}
                />
              )}
              {activeTab === "professinal" && <h2>professinal information </h2>}
              {activeTab === "documents" && <h2>Documents</h2>}
              {activeTab === "accountAccess" && <h2>Account Access </h2>}
              {/* Render other sections based on the active tab */}
            </main>
          </div>
        </div>
      );
    } else {
      return (
        <>
          <Header image={userData.cover} />
          <div className="flex  justify-center min-h-screen ">
            <main className="flex-grow py-12  ">
              <ProfileHeader
                name={`${userData.first_name} ${userData.last_name}`}
                role={userData.bio}
                email={userData.email}
                image={userData.cover}
                editState={editState}
                editStateHandler={editStateHandler}
              />
              <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
              {activeTab === "personal" && (
                <InformationSection user={userData} />
              )}
              {activeTab === "professinal" && <h2>professinal information </h2>}
              {activeTab === "documents" && <h2>Documents</h2>}
              {activeTab === "accountAccess" && <h2>Account Access </h2>}
              {/* Render other sections based on the active tab */}
            </main>
          </div>
        </>
      );
    }
  }
};

export default Profile;
