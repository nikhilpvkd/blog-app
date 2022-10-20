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
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div>
            <>
                {/* <h1>hai</h1> */}
                <MainDiv>
                    {/* <Box sx="50%"> */}
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
                    {/* </Box> */}
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
    /* border: 1px solid #000; */
`;
