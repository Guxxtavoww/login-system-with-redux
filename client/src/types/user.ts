import { IPost } from './post';

export interface IUserState {
  currentUser: IUser | null;
  isFetching: boolean;
  error: string;
}

export interface IUser {
  username: string;
  email: string;
  profilePic?: string;
}

export interface IUserLogin {
  email: string;
  password: string;
}

export interface IUserRegister {
  email: string;
  password: string;
  username: string;
}
