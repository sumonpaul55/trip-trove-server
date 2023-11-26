import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from './useAxiosPublic';
const usePackages = () => {
    const axiosPublic = useAxiosPublic();

    const { data: packages = [] } = useQuery({
        queryKey: ["servicepackages"],
        queryFn: async () => {
            const res = await axiosPublic.get("/packages")
            return res.data
        }
    })
    return { packages }
};

export default usePackages;