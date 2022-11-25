import { apiRequest } from "../../api/apiRequest";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    data: {},
    message: "",
    status: "",
};

export const userRegister = createAsyncThunk("auth/register", async (data) => {
    const res = await apiRequest({
        method: "post",
        url: "api/auth/register",
        data,
    });
    console.log(res);
    return res;
});

export const userLogin = createAsyncThunk("auth/userLogin", async (user) => {
    const res = await apiRequest({
        method: "post",
        url: "/api/auth/login",
        data: user,
    });
    console.log(res);
    return res;
});

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(userLogin.pending, (state, action) => {
            return {
                ...state,
                loading: true,
            };
        });
        builder.addCase(userLogin.fulfilled, (state, action) => {
            console.log(action);

            return {
                ...state,
                data: action.payload.data,
                message: action.payload.message,
                status: action.payload.status,
                loading: false,
            };
        });
        builder.addCase(userLogin.rejected, (state, action) => {
            console.log(action);
            return {
                ...state,
                message: action.payload.message,
                status: action.payload.status,
                loading: false,
            };
        });

        builder.addCase(userRegister.pending, (state, action) => {
            return {
                ...state,
                loading: true,
            };
        });
        builder.addCase(userRegister.fulfilled, (state, action) => {
            console.log(action);
            return {
                ...state,
                message: action.payload.message,
                status: action.payload.status,
                loading: false,
            };
        });
        builder.addCase(userRegister.rejected, (state, action) => {
            console.log(action);
            return {
                ...state,
                message: action.payload.message,
                status: action.payload.status,
                loading: false,
            };
        });
    },
});

export default authSlice.reducer;
