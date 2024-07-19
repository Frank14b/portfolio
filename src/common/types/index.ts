export enum EMAIL_TYPE {
  CONTACT = "contact",
  SUBSCRIBE = "subscribe",
  REGISTER = "register",
  LOGIN = "login",
}

export type RequestMethod = "POST" | "GET" | "DELETE" | "PUT" | "PATCH";

export type ApiResponseDto<T> = {
  status: boolean;
  message: string;
  data?: T;
  statusCode?: number;
};

export type BooleanResultDto<T> = {
  status: boolean;
  message: string;
  data?: Array<T> | object | string | number | undefined | T | ObjectKeyDto;
};

export type ResultPaginate<T> = {
  data: T;
  skip: number;
  limit: number;
  total: number;
  sort: string;
  currentPage: number;
  lastPage: number;
};

export type ObjectKeyDto = { [key: string]: any };

export type ContactFormDto = {
  name: string;
  email: string;
  interest: string;
  message: string;
  phone: string;
};

export * from "./auth.type";