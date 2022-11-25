import React, { useContext, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import { apiRequest } from "../../api/apiRequest";
import { getUsers } from "../../redux/features/userSlice";
import Navbar from "../includes/Navbar";
import SideBar from "../includes/SideBar";
import axios from "axios";
import { login } from "../../redux/features/authSlice";

const HomeScreenLayout = () => {
    const dispatch = useDispatch();

    return (
        <>
            <Navbar />
            <SideBar />
            <Outlet />
        </>
    );
};

export default HomeScreenLayout;
