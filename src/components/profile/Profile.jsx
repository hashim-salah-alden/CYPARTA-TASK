"use client";
  // create custom hook to handle programming logic
import useProfile from "@/hooks/useProfile";
import { ProfileHeader } from "./ProfileHeader";
import { Tabs } from "./Tabs";
import { InformationSection } from "./InformationSection";
import EditProfileForm from "../forms/EditProfile-form";
import Header from "../header/Header";

const Profile = () => {
  // create custom hook to handle programming logic
  const {
    activeTab,
    setActiveTab,
    userData,
    setUserData,
    editState,
    setEditState,
    editStateHandler,
  } = useProfile();

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
