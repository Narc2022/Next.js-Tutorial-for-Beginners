function NewsArticleList({ articles }) {
  return (
    <>
      <h1>NewsArticleList</h1>
      {articles.map((article) => {
        return (
          <div key={article.id}>
            <h2 style={{ color: "#ff9933" }}>
              {article.id} {article.title} | {article.category}
            </h2>
          </div>
        );
      })}
    </>
  );
}

export default NewsArticleList;
export async function getServerSideProps() {
  const response = await fetch("http://localhost:4000/news");
  const data = await response.json();

  return {
    props: {
      articles: data,
    },
  };
}
