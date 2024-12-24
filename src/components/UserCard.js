import React from "react";

function UserCard({ image, firstName, lastName, gender, phoneNumber }) {
  return (
    <div className="flex bg-white cursor-pointer rounded-lg shadow-lg p-10 max-w-md w-full">
      <div className="flex-shrink-0">
        <img
          src={image}
          alt="Profile"
          className="rounded-lg w-24 h-24 object-cover border border-gray-200"
        />
      </div>

      <div className="ml-6">
        <h2 className="text-xl font-semibold">
          {firstName} {lastName}
        </h2>
        <p className="text-gray-500 capitalize mt-1">Gender: {gender}</p>
        <p className="text-gray-500 mt-1">Phone: {phoneNumber}</p>
      </div>
    </div>
  );
}

export default UserCard;
