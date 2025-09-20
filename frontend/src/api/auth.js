const API_URL = import.meta.env.MODE === "production"
  ? import.meta.env.VITE_DEPLOYED_API_URL
  : import.meta.env.VITE_API_URL;

export const signup = async (userData) => {
  const res = await fetch(`${API_URL}/api/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  });
  if (!res.ok) throw new Error("Signup failed");
  return await res.json();
};

export const login = async (credentials) => {
  const res = await fetch(`${API_URL}/api/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credentials),
  });
  if (!res.ok) throw new Error("Login failed");
  return await res.json();
};
