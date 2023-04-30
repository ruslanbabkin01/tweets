import { instance } from '.';
import { ICard } from '../types/card';
import { LIMIT_CARDS } from '../utils/constants';

export const updateFollowers = async (userId: string | undefined, newFollowers: number) => {
    await instance.put<ICard>(`/${userId}`, {
      followers: newFollowers,
    });
};

export const fetchUsers = async (currentPage: number = 1) => {
    const response = await instance.get<ICard[]>(
      `?page=${currentPage}&limit=${LIMIT_CARDS}`
    );
    return response;
};
