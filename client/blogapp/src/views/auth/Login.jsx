import React, { useEffect, useState } from "react";
import {
    TextField,
    Stack,
    Typography,
    Checkbox,
    FormControlLabel,
    Button,
} from "@mui/material";
import styled from "@emotion/styled";
import { Form, useNavigate } from "react-router-dom";
import { userLogin } from "../../redux/features/authSlice";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
    const [user, setUser] = useState({
        userName: "",
        password: "",
    });
    const [err, setErr] = useState("");

    const navigate = useNavigate();

    const state = useSelector((state) => state);
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(user, "onsubmit-=-=-=-=-");
        dispatch(userLogin(user)).then((res) => {
            console.log(res.payload.status);
            if (res.payload.status === "success") {
                navigate("/");
            } else {
                setErr(res.payload.message);
            }
        });
    };
    useEffect(() => {
        console.log(state);
    }, [state]);
    return (
        <div>
            <>
                <MainDiv>
                    <Form>
                        <Stack spacing={3}>
                            <Typography variant="h5" align="center">
                                Sign In
                            </Typography>
                            <TextField
                                name="userName"
                                type="text"
                                label="User Name/Email"
                                variant="outlined"
                                onChange={handleChange}
                            />
                            <TextField
                                name="password"
                                type="password"
                                label="Password"
                                variant="outlined"
                                onChange={handleChange}
                            />
                            {err && (
                                <Typography variant="h8" color="error">
                                    {err}
                                </Typography>
                            )}
                            <FormControlLabel
                                control={<Checkbox />}
                                label="Remind Me"
                            />

                            <Button
                                variant="contained"
                                type="submit"
                                onClick={handleSubmit}
                            >
                                SIGN IN
                            </Button>
                        </Stack>
                    </Form>
                </MainDiv>
            </>
        </div>
    );
};

export default Login;
const MainDiv = styled.div`
    width: 30%;
    padding: 50px;
    margin: 0 auto;
`;
