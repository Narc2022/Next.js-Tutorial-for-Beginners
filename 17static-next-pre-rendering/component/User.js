import React from "react";

const User = ({ users }) => {
  console.log("users", users);
  return (
    <div>
      {users.map((user) => {
        return (
          <div
            key={user.id}
            style={{ border: "1px solid red", marginBottom: "5px" }}
          >
            <p>Name :- {user.name}</p>
            <p>Email :- {user.email}</p>
          </div>
        );
      })}
    </div>
  );
};

export default User;
