export interface LoginFormProps {
  onSubmit: (values: { userName: string; password: string }) => void;
}
