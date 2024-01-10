import React from "react";
import { ThreeCircles } from "react-loader-spinner";

export default function Loader() {
  return (
    <div>
      <ThreeCircles
        visible={true}
        height="100"
        width="100"
        color="#2172ed"
        ariaLabel="three-circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
}
