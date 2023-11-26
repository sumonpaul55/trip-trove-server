import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useStory = () => {
    const axiosSecure = useAxiosSecure()
    const { data: story = [], isLoading } = useQuery({
        queryKey: ["story"],
        queryFn: async () => {
            const res = await axiosSecure.get("/tour-guide-stories");
            return res.data;
        }
    })
    return [story, isLoading]
};

export default useStory;