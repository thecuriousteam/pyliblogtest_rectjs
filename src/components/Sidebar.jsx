import React from "react";
import SidebarItem from "./SidebarItem";
import libraries from "../data/libraries.json";
const Sidebar = () => {
  return (
    <div className="sidebar">
      {libraries.map((lib, index) => (
        <SidebarItem key={index} items={lib} />
      ))}
    </div>
  );
};

export default Sidebar;
