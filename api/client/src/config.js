import axios from "axios";

export const axiosInstance = axios.create({
    baseURL : "https://reika-blog-react.herokuapp.com/api/",
})