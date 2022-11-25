import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiRequest } from "../../api/apiRequest";
const initialState = {
    loading: false,
    message: "",
    data: [],
};

export const getUsers = createAsyncThunk("user/getUser", async (e) => {
    const res = await apiRequest({
        method: "get",
        url: "/api/users/",
    });
    console.log(res);
    return res;
});

const userSlice = createSlice({
    name: "user",
    initialState: initialState,
    reducers: {},
});

export default userSlice.reducer;
