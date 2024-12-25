import React, { useState } from "react";
import AntLogo from "../assests/images/AntLogo.png";
import "../assests/css/sidebar.css";

export default function () {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const [activeLink, setActiveLink] = useState("repositories");

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  const listItems = [
    { name: "repositories", label: "Repositories", icon: "bx bx-home" },
    { name: "code", label: "AI Code Review", icon: "bx bx-code-alt" },
    { name: "cloud", label: "Cloud Security", icon: "bx bx-cloud" },
    { name: "use", label: "How to Use", icon: "bx bx-book" },
    { name: "setting", label: "Settings", icon: "bx bx-cog" },
  ];
  const sideNav2Items = [
    { name: "support", label: "Support", icon: "bx bx-phone-call" },
    { name: "logout", label: "Log Out", icon: "bx bx-log-in" },
  ];
  const handleLinkClick = (name) => {
    setActiveLink(name);
  };

  return (
    <>
      <div
        className={`overlay ${isSidebarVisible ? "show" : ""}`}
        onClick={toggleSidebar}
      ></div>
      <div
        className={`container-fluid sidebar-container ${
          isSidebarVisible ? "show" : ""
        }`}
      >
        <div className="row">
          <div className="header1 d-flex mt-3">
            <img
              src={AntLogo}
              alt=""
              style={{ width: "30px", height: "30px" }}
            />
            <h5 className="mt-2">CodeAnt AI</h5>
            <div className="close-icon" onClick={toggleSidebar}>
              <i className={`bx ${isSidebarVisible ? "bx-x" : "bx-menu"}`}></i>
            </div>
          </div>
          <>
            <div className={`dropdown mt-3 ${isSidebarVisible ? "show" : ""}`}>
              <button
                className="py-2 text-start"
                style={{ backgroundColor: "transparent", border: "none" }}
              >
                Mohamed Javed Yasar
              </button>
              <i class="bx bx-chevron-down fs-5"></i>
              <ul className="dropdown-menu">
                <li>Name 1</li>
                <li>Name 2</li>
                <li>Name 3</li>
              </ul>
            </div>

            <div className={`sidebar ${isSidebarVisible ? "show" : ""}`}>
              <div className="navs mt-3">
                <ul>
                  {listItems.map((item) => (
                    <li key={item.name}>
                      <a
                        href="#"
                        onClick={() => handleLinkClick(item.name)}
                        className={activeLink === item.name ? "active" : ""}
                      >
                        <i className={item.icon}></i>
                        <span>{item.label}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Support and Logout Section */}
              <div className="bottom-links">
                <ul>
                  {sideNav2Items.map((item) => (
                    <li key={item.name}>
                      <a
                        href="#"
                        onClick={() => handleLinkClick(item.name)}
                        className={activeLink === item.name ? "active" : ""}
                      >
                        <i className={item.icon}></i>
                        <span>{item.label}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </>
        </div>
      </div>
    </>
  );
}
