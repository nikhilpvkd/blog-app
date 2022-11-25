import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../redux/features/userSlice";
import axios from "axios";
import { login } from "../redux/features/authSlice";

const Home = () => {
    const state = useSelector((state) => state);
    useEffect(() => {
        console.log(state);
    }, [state]);
    return <div>Home</div>;
};

export default Home;
