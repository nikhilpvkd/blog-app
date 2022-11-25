import React from "react";
import {
    TextField,
    Stack,
    Typography,
    Checkbox,
    FormControlLabel,
    Button,
} from "@mui/material";
import styled from "@emotion/styled";
import { Box } from "@mui/system";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { userRegister } from "../../redux/features/authSlice";
import { useDispatch } from "react-redux";

const Register = () => {
    const [data, setData] = useState({
        userName: "",
        userEmail: "",
        password: "",
    });
    const [err, setErr] = useState("");

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data);
        dispatch(userRegister(data)).then((res) => {
            console.log(res);
            if (res.payload.status === "success") {
                navigate("/login");
            } else {
                setErr(res.payload.message);
            }
        });
    };
    return (
        <>
            <MainDiv>
                <Stack spacing={3}>
                    <Typography variant="h5" align="center">
                        Sign Up
                    </Typography>

                    <TextField
                        name="userName"
                        type="text"
                        label="User Name"
                        variant="outlined"
                        onChange={handleChange}
                    />
                    <TextField
                        name="userEmail"
                        type="email"
                        label="Email Address"
                        variant="outlined"
                        onChange={handleChange}
                    />
                    <TextField
                        name="password"
                        type="Password"
                        label="Password"
                        variant="outlined"
                        onChange={handleChange}
                    />

                    {err && (
                        <Typography variant="h8" color="error">
                            {err}
                        </Typography>
                    )}

                    <Button
                        variant="contained"
                        type="submit"
                        onClick={handleSubmit}
                    >
                        SIGN UP
                    </Button>
                    <Link href="#" to="/login" color="primary" align="right">
                        Already have an account? Sign in
                    </Link>
                </Stack>
            </MainDiv>
        </>
    );
};

export default Register;
const MainDiv = styled.div`
    width: 30%;
    padding: 50px;
    margin: 0 auto;
`;
