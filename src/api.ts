import { User, MembershipProduct } from './interfaces';
import axiosInstance from './api/client/index';
export const fetchAllUsers = async (): Promise<User[]> => {
  const response = await axiosInstance.get('/user/all');
  return response.data;
};

export const updateUser = async (
  userId: number,
  updatedUser: User
): Promise<void> => {
  await axiosInstance.put(`/user/${userId}`, updatedUser);
};

export const updateProduct = async (
  productId: number,
  updatedProduct: MembershipProduct
): Promise<void> => {
  await axiosInstance.patch(
    `/membership/products/${productId}`,
    updatedProduct
  );
};

export const toggleProductStatusApi = async (
  productId: number
): Promise<MembershipProduct> => {
  const response = await axiosInstance.patch(
    `/membership/product/${productId}`
  );
  return response.data;
};
