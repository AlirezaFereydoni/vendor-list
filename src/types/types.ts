import type { Dispatch } from "redux";

export type ServicesType = (
  url: string,
  params?: { [key: string]: string },
  method?: "GET" | "POST" | "PUT" | "PATCH" | "DELETE"
) => any;

export type GetActionType<T> = (dispatch: Dispatch, filterParams?: { [key: string]: string }) => T;
