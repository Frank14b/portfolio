export type SignInFormDto = {
  email: string;
  password: string;
};

export type ResultSignInDto = {
  id: string;
  email: string;
  name: string;
  password: string;
  passwordSalt: string;
};
