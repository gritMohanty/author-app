import React from "react";

const ModeSelector = () => {
  return (
    <div className="flex flex-row items-center justify-start gap-4">
      <div className="border-black p-2 border-2 bg-yellow pl-8 pr-8">
        Story Mode
      </div>
      <div className="border-black p-2 border-2 pl-8 pr-8">Character Mode</div>
    </div>
  );
};

export default ModeSelector;
