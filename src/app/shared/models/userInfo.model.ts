export interface UserInfo {
  fakeToken: string;
  id: number;
  login: string;
  password: string;
  name: {
    first: string;
    last: string;
  }
}
