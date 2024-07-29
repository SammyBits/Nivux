import { API_URL } from "../../const";
import { JWT } from "../../models/user/auth/JwtModel";

export const createJwt = async (
  email: string,
  password: string
): Promise<JWT> => {
  const response = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) throw new Error("Failed to create jwt");

  const data = (await response.json()) as JWT;

  if (!data) throw new Error("Failed to parse jwt");

  return data
};
