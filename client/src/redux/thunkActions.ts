import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance, { setAccessToken } from "../../axiosInstance";
import { AxiosResponse } from "axios";
import { IUser } from "./types/stateTypes";
import { initUserState } from "./initStates/initStates";

const { VITE_API }: ImportMeta["env"] = import.meta.env;

export const getUser = createAsyncThunk(
  "user/get",
  async (): Promise<IUser> => {
    const { data } = await axiosInstance.get(`${VITE_API}/tokens/refresh`);
    if (data.accessToken) setAccessToken(data.accessToken);
    if (data.user) {
      return data.user;
    } else {
      return initUserState;
    }
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
