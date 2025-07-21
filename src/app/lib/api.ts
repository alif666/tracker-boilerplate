"use server";

const baseUrl = process.env.NEXT_PUBLIC_API_URL;

export async function loginUser(email: string, password: string) {
  const response = await fetch(`${baseUrl}/api/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
    credentials: "include",
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Login failed: ${errorText}`);
  }

  const json = await response.json(); // expected: { token: "..." }
  return json.token;
}

export async function fetchCurrentUser(token: string | null) {
  if (!token) throw new Error("Token is missing");

  const response = await fetch(`${baseUrl}/api/auth/me`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Unauthorized: ${errorText}`);
  }

  return await response.json(); // expected: { user: {...} }
}
