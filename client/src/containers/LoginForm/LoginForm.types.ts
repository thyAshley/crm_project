export interface LoginFormAttribute {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
  email: string;
  password: string;
}
