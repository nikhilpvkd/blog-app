import axios from "axios";
axios.defaults.baseURL = process.env.REACT_APP_API_URL;
axios.defaults.withCredentials = true;
console.log(process.env.REACT_APP_API_URL);
export const apiRequest = async (options) => {
    let headers = {
        "Content-Type": "application/json",
    };
    options = { ...options, headers, withCredentials: true };

    const res = await axios(options)
        .then((res) => {
            return res.data;
        })
        .catch((err) => {
            return err.response.data;
        });
    return res;
};
