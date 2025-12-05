import { useQuery } from '@tanstack/react-query';
import { WagonDTO } from '../model/types';
import { axiosInstance } from '@/shared/services/instance';

export const useGetWagons = () => {
  const query = useQuery<WagonDTO[]>({
    queryKey: ['wagons'],
    queryFn: async () => {
      return (await axiosInstance.get<WagonDTO[]>('/wagon')).data;
    },
  });

  return {
    ...query,
    wagons: query.data ?? [],
  };
};
