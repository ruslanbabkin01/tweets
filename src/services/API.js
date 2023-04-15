import { instance } from '.';

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
    const limit = 12;
    await instance.get(`?page=${currentPage}&limit=${limit}`);
  } catch (error) {
    console.error('Error fetching users:', error.message);
  }
};
