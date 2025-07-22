"use server";
const baseUrl = process.env.NEXT_PUBLIC_API_URL;

// ################################################################# USER API ############################################################################

/**
 * Performs login, returns token (cookie should be set via client or route handler)
 */
export async function loginUser(email: string, password: string): Promise<string> {
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

  const { token } = await response.json();

  return token;
}

/**
 * Server-only: Fetches the currently logged-in user using token from cookies or client pass
 */
export async function fetchCurrentUser(token: string) {
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

  return await response.json();
}export async function fetchDeviceListPaginated(token: string, from: number, end: number) {
  if (!token) throw new Error("Token is missing");

  const response = await fetch(`${baseUrl}/api/devices/paginated?from=${from}&end=${end}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Unauthorized: ${errorText}`);
  }

  return await response.json();
}
