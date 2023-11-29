import axios from 'axios';


const url = `https://trip-trove-server.vercel.app`

const axiosPublic = axios.create({
    baseURL: url,
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;