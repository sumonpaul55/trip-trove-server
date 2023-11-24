import axios from 'axios';


const url = `http://localhost:5000`

const axiosSecure = axios.create({
    baseURL: url,
    withCredentials: true
})

const useAxiosSecure = () => {
    return axiosSecure;
};

export default useAxiosSecure;