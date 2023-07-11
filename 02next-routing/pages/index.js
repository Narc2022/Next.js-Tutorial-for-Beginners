import React from "react";
import Link from "next/link";

const Home = () => {
  const handleClick = () => {
    alert("Order is placed");
  };
  return (
    <div>
      <h1>Home Page</h1>
      <Link href="/blog">Blog</Link>
      {"  |  "}
      <Link href="/product">Product</Link>
      <button onClick={handleClick}>Place Order</button>
    </div>
  );
};

export default Home;
