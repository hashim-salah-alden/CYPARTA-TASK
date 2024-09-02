export const InformationSection = ({ user }) => {
  // this is server component fetch method
  // const response = await fetch(
  //   "https://cyparta-backend-gf7qm.ondigitalocean.app/api/profile/"
  // );
  // console.log(response)
  // const user = await response.json();

  return (
    <div className="mt-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-gray-500">First Name</label>
          <p className="font-bold">{user.first_name}</p>
        </div>
        <div>
          <label className="block text-gray-500">Last Name</label>
          <p className="font-bold">{user.last_name}</p>
        </div>
        <div>
          <label className="block text-gray-500">Email</label>
          <p className="font-bold">{user.email}</p>
        </div>
        <div>
          <label className="block text-gray-500">Phone</label>
          <p className="font-bold">{user.phone}</p>
        </div>
        <div>
          <label className="block text-gray-500">Bio</label>
          <p className="font-bold">{user.bio}</p>
        </div>
        {/* Add other fields here */}
      </div>
    </div>
  );
};
