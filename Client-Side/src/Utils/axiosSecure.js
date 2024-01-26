import axios from "axios";

const axiosSecure= axios.create({
    baseURL:import.meta.env.VITE_BASE_URL,
    withCredentials:true,
})


export default axiosSecure