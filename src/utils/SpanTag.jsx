import React from "react";

const SpanTag = ({ label }) => {
  return (
    <span className="text-gray-900 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium cursor-pointer">
      {label}
    </span>
  );
};

export default SpanTag;
