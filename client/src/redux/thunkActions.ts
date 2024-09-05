import { createAsyncThunk } from "@reduxjs/toolkit"
import axiosInstance, { setAccessToken } from '../../axiosInstance';
import { AxiosResponse } from "axios";
import { IEntrie, IInputs, IUser } from '../types/stateTypes';

const { VITE_API }: ImportMeta['env'] = import.meta.env;

export const getEntries = createAsyncThunk('entries/all', async (): Promise<IEntrie[]> => {
  const { data }: AxiosResponse<IEntrie[]> = await axiosInstance.get(`${VITE_API}/tasks`)
  return data
})

export const addEntrie = createAsyncThunk('entrie/add', async (inputs: IInputs): Promise<IEntrie> => {
  const { data }: AxiosResponse<IEntrie> = await axiosInstance.post(`${VITE_API}/tasks`, inputs);
  console.log("data:", data)
  return data
})

export const delEntrie = createAsyncThunk('entrie/del', async (id: number): Promise<number> => {
  console.log('ID', id)
  await axiosInstance.delete(
    `${import.meta.env.VITE_API}/tasks/${id}`
  );
  return id
})

// * Работа с юзером
export const getUser = createAsyncThunk('user/get', async (): Promise<IUser> => {
  const { data } = await axiosInstance.get(`${VITE_API}/tokens/refresh`)
  console.log("data:", data)
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
