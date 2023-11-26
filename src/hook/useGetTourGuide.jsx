import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from './useAxiosPublic';
import useAuth from './useAuth';
const useGetTourGuide = () => {
    const axiosPublic = useAxiosPublic();
    const { user } = useAuth()

    const { data: tourGuide = [] } = useQuery({
        queryKey: [user?.email, "tourGuide"],
        queryFn: async () => {
            const res = await axiosPublic.get(`/user-tourGuide/tourGuide`)
            return res.data
        }
    })
    return { tourGuide }
};

export default useGetTourGuide;