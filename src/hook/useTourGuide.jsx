import { useQuery } from '@tanstack/react-query';

import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';

const useTourGuide = () => {
    const { user, loading } = useAuth()
    const axiosSecure = useAxiosSecure();
    const { data: isTourGuide, isPending: isTourGuideLoading } = useQuery({
        queryKey: [user?.email, "isTourguide"],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/tourGuide/${user?.email}`)
            return res.data?.tourGuide;
        }
    })
    // console.log(isTourGuide)
    return [isTourGuide, isTourGuideLoading]
};
export default useTourGuide;