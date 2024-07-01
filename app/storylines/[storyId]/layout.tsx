import ModeSelector from "@/components/ModeSelector";
import React from "react";

const StoryLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section>
      <ModeSelector />
      {children}
    </section>
  );
};

export default StoryLayout;
