"use client";
import React, { useState } from "react";
import {
  TfiBriefcase,
  TfiComments,
  TfiLayoutMediaOverlay,
} from "react-icons/tfi";

const INITIAL_TABS = [
  {
    id: 0,
    name: "My Work",
    icon: <TfiBriefcase />,
    isActive: true,
  },
  {
    id: 1,
    name: "Authors Feed",
    icon: <TfiComments />,
    isActive: false,
  },
  {
    id: 2,
    name: "Review Requests",
    icon: <TfiLayoutMediaOverlay />,
    isActive: false,
  },
];

function Sidebar() {
  const [tabs, setTabs] = useState(INITIAL_TABS);
  const handleTabChange = (id: number) => {
    const newTabs = [...tabs];
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
          <span className="flex flex-row items-center justify-start gap-8">
            {tab.icon}
            {tab?.name}
          </span>
        </li>
      ))}
    </ul>
  );
}

export default Sidebar;
