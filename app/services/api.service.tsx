import { IUser } from "@/app/models/IUser";
import { IComment } from "@/app/models/IComments";
import { IPost } from "@/app/models/IPost";

const BASE_URL = "https://jsonplaceholder.typicode.com";

export const getAllUsers = async (): Promise<IUser[]> => {
  return await fetch(`${BASE_URL}/users`)
      .then(res => res.json());
};

export const getAllPosts = async (): Promise<IPost[]> => {
  return await fetch(`${BASE_URL}/posts`)
      .then(res => res.json());
};

export const getAllComments = async (): Promise<IComment[]> => {
  return await fetch(`${BASE_URL}/comments`)
      .then(res => res.json());
};