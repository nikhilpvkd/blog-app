import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../includes/Navbar";
import SideBar from "../includes/SideBar";

const HomeScreenLayout = () => {
    return (
        <>
            <Navbar />
            <SideBar />
            <Outlet />
        </>
    );
};

export default HomeScreenLayout;
