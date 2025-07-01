import React from "react";
import { Outlet } from "react-router-dom";
import { assets } from "../assets/assets";

const Dashboard = () => {
  return (
    <div className="min-h-screen">
      {/* Navbar for Recruiter Panel*/}
      <div className="shadow py-4">
        <div className="px-5 flex justify-between items-center">
          <img
            className="max-sm:w-32 cursor-pointer"
            src={assets.logo}
            alt="logo"
          />
          <div className="flex items-center gap-3">
            <p className="max-sm:hidden">Welcome, Recruiter</p>
            <div>
              <img
                className="w-8 border rounded-full"
                src={assets.company_icon}
                alt="comapny icon"
              />
              <div>
                <ul>
                  <li>Logout</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
