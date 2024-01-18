"use client";
import React from "react";
import Button from "../button";

function Input({children}) {
  React.useEffect(() => {
    console.log("Input");
  }, []);
  return <div>
  Input {children}
  </div>;
}

export default Input;
