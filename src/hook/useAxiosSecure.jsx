import axios from 'axios';


const url = `http://localhost:5000`

const axiosSecure = axios.create({
    baseURL: url,
    withCredentials: true
})

const useAxiosSecure = () => {
    axiosSecure.interceptors.request.use(function (config) {
        // console.log(config)
        return config
    }, function (err) {
        return Promise.reject(err)
    })

    axiosSecure.interceptors.response.use(function (response) {
        return response
    }, function async(error) {
        // console.log(error)
        return Promise.reject(error)
    })


    return axiosSecure;
};

export default useAxiosSecure;