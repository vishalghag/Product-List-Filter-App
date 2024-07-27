// Spinner.js
// eslint-disable-next-line no-unused-vars
import React from "react";

const Spinner = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <div className="h-16 w-16 animate-spin rounded-full border-4 border-solid border-blue-500 border-t-transparent"></div>
    </div>
  );
};

export default Spinner;
