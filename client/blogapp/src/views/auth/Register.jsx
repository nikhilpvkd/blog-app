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

const Register = () => {
    return (
        <>
            
            <MainDiv>
                
                <Stack spacing={3}>
                    <Typography variant="h5" align="center">
                        Sign Up
                    </Typography>
                    <TextField
                        id="outlined-basic"
                        label="User Name"
                        variant="outlined"
                    />
                    <TextField
                        id="outlined-basic"
                        label="Email Address"
                        variant="outlined"
                    />
                    <TextField
                        id="outlined-basic"
                        label="Password"
                        variant="outlined"
                    />
                    <FormControlLabel
                        control={<Checkbox defaultChecked />}
                        label="content"
                    />
                    <Button variant="contained">SIGN UP</Button>
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
