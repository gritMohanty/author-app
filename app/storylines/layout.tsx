import Sidebar from "@/components/Sidebar";
import React from "react";

const StoryLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <div className="layout flex h-screen">
      <nav className="sidebar w-2/12 flex-shrink-0 p-4 border-r-2 border-gray">
        <Sidebar />
      </nav>
      <main className="content flex-grow px-4 py-4">{children}</main>
    </div>
  );
};

export default StoryLayout;
