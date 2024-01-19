import { BaseResponse } from "../../../../../types";

export interface AuthData {
  authentication: string;
  userType: string;
}

export interface LoginResponse extends BaseResponse, AuthData {}
