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

export interface IUserData {
  email: string;
  password: string;
  username?: string;
}
