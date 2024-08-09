import axios from "axios";

import { API_ENDPOINTS } from "@/constants/api-endpoints";

export const getPosts = async () => {
  try {
    const response = await axios.get(API_ENDPOINTS.POSTS.GET_POSTS);
    return response?.data;
  } catch (error) {
    throw error;
  }
};

export const createPost = async (data: unknown) => {
  try {
    const response = await axios.post(API_ENDPOINTS.POSTS.CREATE_POSTS, data);
    return response;
  } catch (error) {
    throw error;
  }
};
