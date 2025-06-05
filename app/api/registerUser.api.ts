import { api } from "../lib/client";

export type RegisterForm = {
  name: string;
  email: string;
  password: string;
};

type RegisterResponse = {
  message: string;
  userId?: string;
};

export const registerUser = async (
  data: RegisterForm
): Promise<RegisterResponse> => {
  try {
    console.log(data)
    const response = await api.post("/auth/register", JSON.stringify(data));
    console.log(response)
    return response.data;
  } catch (error: any) {
    if (error.response) {
      throw new Error(error.response.data.message || "Ошибка регистрации");
    }
    throw error;
  }
};
