import React from "react";

const Tag = ({ tag }: { tag: string }) => {
  return <span className="bg-gray p-1 font-bold text-xs ">{tag}</span>;
};

export default Tag;
