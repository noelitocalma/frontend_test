import { useQuery } from "react-query"
import axios from 'axios';
import { User, UserPost } from "../types/user";

const JSON_PLACEHOLDER_API = 'https://jsonplaceholder.typicode.com';

export const useGetUsers = () => {
  return useQuery<User[]>(['users'], async function () {
    const response = await axios.create({ baseURL: JSON_PLACEHOLDER_API }).get<User[]>('/users')
    return response.data
  })
}

export const useGetUserPost = ({ userId }: { userId?: number }) => {
  return useQuery<UserPost[]>(['users', userId], async function () {
    const response = await axios.create({ baseURL: JSON_PLACEHOLDER_API }).get<UserPost[]>('/posts', { params: { userId } })
    return response.data
  }, {
    enabled: Boolean(userId)
  })
}