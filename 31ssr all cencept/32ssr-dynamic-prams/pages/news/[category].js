import React from "react";

const ArticalListByCategory = ({ articals, category }) => {
  return (
    <div>
      <h1>showing news category</h1>
      {articals.map((artical) => {
        return (
          <div key={artical.id}>
            <h1>
              {artical.id} {artical.title}
            </h1>
            <p>{artical.category}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ArticalListByCategory;

export async function getServerSideProps(context) {
  const { params } = context;
  const { category } = params;
  const response = await fetch(
    `http://localhost:4000/news?category=${category}`
  );
  const data = await response.json();

  return {
    props: {
      articals: data,
      category,
    },
  };
}
