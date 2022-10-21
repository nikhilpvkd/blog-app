import React from "react";
import {
    TextField,
    Stack,
    Typography,
    Checkbox,
    FormControlLabel,
    Button,
    FormControl,
} from "@mui/material";
import styled from "@emotion/styled";
import { Box } from "@mui/system";
import { Form, Link } from "react-router-dom";

const Login = () => {
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
                                id="outlined-basic"
                                label="User Name"
                                variant="outlined"
                            />
                            <TextField
                                id="outlined-basic"
                                label="Password"
                                variant="outlined"
                            />

                            <Button variant="contained">SIGN IN</Button>
                        </Stack>
                    </Form>
                </MainDiv>
            </>
            ;
        </div>
    );
};

export default Login;
const MainDiv = styled.div`
    width: 30%;
    padding: 50px;
    margin: 0 auto;
`;
