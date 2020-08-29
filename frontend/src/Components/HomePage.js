import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
function HomePage() {
  const dispatch = useDispatch();
  const imageReducer = useSelector((state) => state.imageReducer);

  return <div></div>;
}

export default HomePage;
