import React, { useEffect, useState } from "react";
import UserCard from "./components/UserCard";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("https://randomuser.me/api/?page=1&results=1&seed=abc")
      .then((response) => response.json())
      .then((data) => setUser(data.results[0]));
      console.log(user)
  }, [user]);

  if (!user) return <div className="text-center mt-10">Loading...</div>;

  return (
    <div className="flex flex-col items-center justify-start h-screen bg-gray-100 p-4 sm:justify-center">
      <UserCard
        image={user.picture.large}
        firstName={user.name.first}
        lastName={user.name.last}
        gender={user.gender}
        phoneNumber={user.phone}
      />
    </div>
  );
}

export default App;
