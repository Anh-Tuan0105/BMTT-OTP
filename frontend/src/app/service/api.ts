import axios from "axios";

const BASE_URL =
    process.env.NODE_ENV === "development" ? "http://localhost:7001/api" : "/api";

export default axios.create({
    baseURL: BASE_URL
});