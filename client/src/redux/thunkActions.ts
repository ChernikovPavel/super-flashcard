import { createAsyncThunk } from "@reduxjs/toolkit"
import axiosInstance, { setAccessToken } from '../../axiosInstance';
import { AxiosResponse } from "axios";
import { IEntrie, IInputs, IUser } from '../types/stateTypes';

const { VITE_API }: ImportMeta['env'] = import.meta.env;

export const getEntries = createAsyncThunk('entries/all', async (): Promise<IEntrie[]> => {
  const { data }: AxiosResponse<IEntrie[]> = await axiosInstance.get(`${VITE_API}/game/deck`)
  return data
})

export const addEntrie = createAsyncThunk('entrie/add', async (inputs: IInputs): Promise<IEntrie> => {
  const { data }: AxiosResponse<IEntrie> = await axiosInstance.post(`${VITE_API}/tasks`, inputs);
  return data
})

export const delEntrie = createAsyncThunk('entrie/del', async (id: number): Promise<number> => {
  await axiosInstance.delete(
    `${import.meta.env.VITE_API}/tasks/${id}`
  );
  return id
})

// * Работа с юзером
export const getUser = createAsyncThunk('user/get', async (): Promise<IUser> => {
  const { data } = await axiosInstance.get(`${VITE_API}/tokens/refresh`)
  setAccessToken(data.accessToken);
  return data.user
}) 

export const authUser = createAsyncThunk('user/auth', async (obj) => {
  const { data }: AxiosResponse = await axiosInstance.post(
    `${import.meta.env.VITE_API}/auth/${obj.type}`,
    obj.inputs
  );
  setAccessToken(data.accessToken);
  return data.user
})
