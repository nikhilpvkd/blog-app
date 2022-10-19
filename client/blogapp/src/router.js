import React from "react";
import { createBrowserRouter } from "react-router-dom";
import HomeScreenLayout from "./componenets/layouts/HomeScreenLayout";
import Home from "./views/Home";
import Login from "./views/auth/Login";
import CreatePost from "./views/posts/CreatePost";
import ViewPost from "./views/posts/ViewPost";
import Register from "./views/auth/Register";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeScreenLayout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/viewpost/:id",
                element: <ViewPost />,
            },
            {
                path: "/createPost",
                element: <CreatePost />,
            },
        ],
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/register",
        element: <Register />,
    },
]);
