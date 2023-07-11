import { useRouter } from "next/router";
import React from "react";

const review = () => {
  const router = useRouter();
  const reviewId = router.query.reviewId;
  return <div>review {reviewId}</div>;
};

export default review;
