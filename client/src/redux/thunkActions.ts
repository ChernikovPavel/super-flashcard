import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance, { setAccessToken } from "../../axiosInstance";
import { AxiosResponse } from "axios";
import { IStats, IUser } from "./types/stateTypes";

const { VITE_API }: ImportMeta["env"] = import.meta.env;

export const getUser = createAsyncThunk(
  "user/get",
  async (): Promise<IUser> => {
    const { data } = await axiosInstance.get(`${VITE_API}/tokens/refresh`);
    console.log("data:", data);
    setAccessToken(data.accessToken);
    return data.user;
  }
);

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

export const getStats = createAsyncThunk('stats/all', async (): Promise<IStats[]> => {
  const { data }: AxiosResponse<IStats[]> = await axiosInstance.get(`${VITE_API}/stats`)
  return data
})
