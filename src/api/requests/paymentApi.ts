import axiosInstance from '../client';

export const getPayments = async () => {
  const response = await axiosInstance.get(`/payments/list`);
  const rawData = response.data;

  if (!rawData || !Array.isArray(rawData.data)) {
    throw new TypeError(
      'Expected an array but received: ' + typeof rawData.data
    );
  }

  return rawData.data;
};
