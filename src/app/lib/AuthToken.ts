// lib/authToken.ts
export class AuthToken {
  getToken(): string | null {
    return typeof window !== "undefined" ? sessionStorage.getItem("token") : null;
  }

  setToken(token: string): void {
    if (typeof window !== "undefined") {
      sessionStorage.setItem("token", token);
    }
  }

  clearToken(): void {
    if (typeof window !== "undefined") {
      sessionStorage.removeItem("token");
    }
  }
}

export const authToken = new AuthToken();
