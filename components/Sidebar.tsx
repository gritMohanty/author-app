"use client";
import React, { useState } from "react";

const INITIAL_TABS = [
  {
    id: 0,
    name: "My Work",
    isActive: true,
  },
  {
    id: 1,
    name: "Authors Feed",
    isActive: false,
  },
  {
    id: 2,
    name: "Review Requests",
    isActive: false,
  },
];

function Sidebar() {
  const [tabs, setTabs] = useState(INITIAL_TABS);
  const handleTabChange = (id: number) => {
    const newTabs = [...tabs]
    newTabs.map((tab) => {
      if (tab.id === id) tab.isActive = true;
      else tab.isActive = false;
    });
    setTabs(newTabs);
  };
  return (
    <ul className="flex gap-4 flex-col">
      {tabs?.map((tab) => (
        <li
          className={`cursor-pointer ${tab.isActive && "bg-yellow"} p-2`}
          onClick={() => handleTabChange(tab.id)}
        >
          {tab?.name}
        </li>
      ))}
    </ul>
  );
}

export default Sidebar;
