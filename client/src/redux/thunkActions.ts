import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance, { setAccessToken } from "../../axiosInstance";
import { AxiosResponse } from "axios";
import { IEntrie, IUser} from './types/stateTypes';
const { VITE_API }: ImportMeta['env'] = import.meta.env;

export const getEntries = createAsyncThunk('entries/all', async (): Promise<IEntrie[]> => {
  const { data }: AxiosResponse<IEntrie[]> = await axiosInstance.get(`${VITE_API}/game/deck`)
  return data
})

// * Работа с юзером
export const getUser = createAsyncThunk('user/get', async (): Promise<IUser> => {
  const { data } = await axiosInstance.get(`${VITE_API}/tokens/refresh`)
  console.log("data:", data)
  setAccessToken(data.accessToken);
  return data.user
}) 

export const authUser = createAsyncThunk("user/auth", async (obj) => {
  const { data }: AxiosResponse = await axiosInstance.post(
    `${import.meta.env.VITE_API}/auth/${obj.authStatus}`,
    obj.inputs
  );
  setAccessToken(data.accessToken);
  return data.user;
});

export const logoutUser = createAsyncThunk("user/logout", async () => {
  await axiosInstance.get(`${VITE_API}/auth/logout`);
  setAccessToken("");
});
