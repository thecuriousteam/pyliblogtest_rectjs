// SidebarItem.js
import React, { useState } from "react";
import { Link } from "react-router-dom";

const SidebarItem = ({ items }) => {
  const [open, setOpen] = useState(false);

  if (items.childrens) {
    return (
      <div className={open ? "sidebar-item open" : "sidebar-item"}>
        <div className="sidebar-title">
          <Link to={items.path}>{items.title}</Link>
          <i
            className="fa-solid fa-arrow-down toggle-btn"
            onClick={() => setOpen(!open)}
          ></i>
        </div>

        {/* Submenu */}
        <div className="sidebar-content">
          {items.childrens.map((child, index) => (
            <div key={index} className="submenu-item">
              <Link to={child.path}>{child.title}</Link>
            </div>
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div className="sidebar-item">
        <div className="sidebar-title">
          <span>{items.title}</span>
        </div>
      </div>
    );
  }
};

export default SidebarItem;
