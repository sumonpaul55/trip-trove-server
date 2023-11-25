import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const useUsers = () => {
    const axiosPublic = useAxiosPublic();

    const { data: packages = [] } = useQuery({
        queryKey: ["users"],
        queryFn: async () => {
            const res = await axiosPublic.get("/users")
            return res.data
        }
    })
    return { packages }
};

export default useUsers;