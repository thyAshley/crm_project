export interface LoginFormAttribute {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
  forgotPassword: React.Dispatch<React.SetStateAction<boolean>>;
  email: string;
  password: string;
}
