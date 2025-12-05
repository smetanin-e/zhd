import { useQuery } from '@tanstack/react-query';
import { axiosInstance } from '@/shared/services/instance';
import { WagonOwner } from '@generated/client';

export const useGetWagonOwners = () => {
  const query = useQuery<WagonOwner[]>({
    queryKey: ['wagon-owners'],
    queryFn: async () => {
      return (await axiosInstance.get<WagonOwner[]>('/wagon-owner')).data;
    },
  });

  return {
    ...query,
    wagonOwners: query.data ?? [],
  };
};
