import { instance } from '.';
import { LIMIT_CARDS } from '../utils/constants';

export const updateFollowers = async (userId, newFollowers) => {
  try {
    await instance.put(`/${userId}`, {
      followers: newFollowers,
    });
  } catch (error) {
    console.error('Error updating followers:', error.message);
  }
};

export const fetchUsers = async currentPage => {
  try {
    const response = await instance.get(
      `?page=${currentPage}&limit=${LIMIT_CARDS}`
    );
    return response;
  } catch (error) {
    console.error('Error fetching users:', error.message);
  }
};
