import React from "react";

export default function handler(req, res) {
  res.status(200).json({ name: "Recent Blog Api route" });
}
