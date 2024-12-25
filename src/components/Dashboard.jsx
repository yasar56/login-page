import React, { useState } from "react";
import "../assests/css/dashboard.css";
import AntLogo from "../assests/images/AntLogo.png";
import Sidebar from "./Sidebar";

export default function Dashboard() {
  const RepoData = [
    {
      id: 1,
      title: "design-system",
      auth: "public",
      program: "React",
      storage: "7320 KB",
      DOU: "updated 1 day ago",
    },
    {
      id: 2,
      title: "codeant-ci-app",
      auth: "Private",
      program: "Javascript",
      storage: "5871 KB",
      DOU: "updated 2 day ago",
    },
    {
      id: 3,
      title: "analytics-dashboard",
      auth: "private",
      program: "Python",
      storage: "4521 KB",
      DOU: "updated 5 day ago",
    },
    {
      id: 4,
      title: "mobile-app",
      auth: "Public",
      program: "Swift",
      storage: "3096 KB",
      DOU: "updated 3 day ago",
    },
    {
      id: 4,
      title: "ecommerce-platform",
      auth: "Private",
      program: "Java",
      storage: "6210 KB",
      DOU: "updated 6 day ago",
    },
    {
      id: 5,
      title: "blog-website",
      auth: "Public",
      program: "HTML/CSS",
      storage: "1876 KB",
      DOU: "updated 4 day ago",
    },
    {
      id: 6,
      title: "social-network",
      auth: "Private",
      program: "PHP",
      storage: "5432 KB",
      DOU: "updated 7 day ago",
    },
  ];

  return (
    <div className="container-fluid">
      <div className="row ">
        {/* <Navbar/> */}
        <div className="col-md-3 col-sm-12 ">
          <Sidebar />
        </div>

        {/* Main Content */}

        <div className="col-md-9 col-sm-12 main-drawer">
          <div className="main-content">
            <div className="main-head d-flex">
              <div className="col nav-title">
                <h3>Repositories</h3>
                <span>33 total values</span>
              </div>
              <div className="col m-4 ">
                <button id="btn1" className="btn">
                  <i class="bx bx-refresh"></i>
                  <span className="mx-2">Refresh</span>
                </button>
                <button id="btn2" className="btn btn-primary">
                  <i class="bx bx-plus"></i>
                  <span>Add Repositories</span>
                </button>
              </div>
            </div>

            <div class="input-group-sm search-bar">
              <i class="bx bx-search-alt-2 search-icon"></i>
              <input
                type="text"
                className="search-input"
                placeholder="Search Repositories..."
              />
            </div>
            
            <div className="col-12 datas mt-4">
              {RepoData.map((data) => (
                <div className="repo-data p-2 border-top" key={data.id}>
                  <div className="rows d-flex px-4 mt-2">
                    <h5>{data.title}</h5>
                    <span className="ms-2 text-center">{data.auth}</span>
                  </div>
                  <ul className="d-flex list">
                    <li>
                      {data.program}{" "}
                      <i class="bx bxs-circle bx-flip-horizontal mx-1 circle"></i>
                    </li>
                    <li>
                      <i class="bx bx-data bx-flip-horizontal"></i>{" "}
                      {data.storage}
                    </li>
                    <li>{data.DOU}</li>
                  </ul>
                </div>
              ))}
              <div className="border-bottom"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
