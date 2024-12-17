import axios from 'axios';
import axiosInstance from '../client';
export const getInfluencerApplies = async () => {
  const response = await axiosInstance.get('/influencer/apply/all');
  return response.data;
};

export const approveApplication = async (id: number) => {
  await axiosInstance.put(`/influencer/apply/${id}/approve`);
};

export const rejectApplication = async (id: number, reason: string) => {
  await axiosInstance.put(`/influencer/apply/${id}/reject`, {
    reason,
  });
};
