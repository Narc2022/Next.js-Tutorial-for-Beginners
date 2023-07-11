import React from "react";
import User from "../component/User";

const userList = ({ users }) => {
  console.log("users", users);
  return (
    <div style={{ border: "1px solid red", marginBottom: "5px" }}>
      <User users={users} />
    </div>
  );
};

export default userList;

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  console.log("data", data);

  return {
    props: {
      users: data,
    },
  };
}
