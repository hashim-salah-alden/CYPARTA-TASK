export const ProfileHeader = ({
  name = "Hashim Salah Alden",
  role,
  email,
  image,
  editState,
  editStateHandler
}) => {
  return (
    <div className="flex items-center justify-between p-4 border-b-[1px]">
      <div className="flex justify-between user">
        <img src={image} alt={name} className="w-24 h-24 rounded-md" />
        <div className="ml-4">
          <h1 className="text-xl font-bold">{name}</h1>
          <p>{role}</p>
          <p>{email}</p>
        </div>
      </div>
      <div className="edit-user">
        <button onClick={() => editStateHandler()} className="bg-slate-900 text-slate-50  py-3 px-6 rounded-lg">
          {editState ? "Show Profile" : "Edit Profile"}
        </button>
      </div>
    </div>
  );
};
