import { useRouter } from "next/router";
import React from "react";

export default function Docs() {
  const router = useRouter();
  const { params } = router.query;
  console.log("params", params);
  return <div>Docs Home Page</div>;
}
