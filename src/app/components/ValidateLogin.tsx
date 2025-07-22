"use client";
import { useEffect, useState, ReactNode } from "react";
import { fetchCurrentUser } from "../lib/api";
import { ValidateLoginContext } from "../lib/ValidateLoginContext";
interface ValidateLoginProps {
  children: ReactNode;
}

export default function ValidateLogin({ children }: ValidateLoginProps) {
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [token, setToken] = useState<string>("");
  const [error, setError] = useState("");

  useEffect(() => {
    const savedToken = sessionStorage.getItem("token");
    if (!savedToken) {
      setError("No token found. Please log in.");
      return;
    }

    setToken(savedToken);

    fetchCurrentUser(savedToken)
      .then((res) => setCurrentUser(res.user))
      .catch((err) => setError(err.message || "Failed to fetch user"));
  }, []);

  if (error) return <p className="text-red-600 p-4">{error}</p>;
  if (!currentUser) return <p className="p-4">Loading user...</p>;

  return (
    <ValidateLoginContext.Provider value={{ currentUser, token }}>
      <h1 className="text-xl font-bold mb-4">
        Welcome, {currentUser.firstName} {currentUser.lastName}
      </h1>
      <p className="text-sm text-gray-600">Email: {currentUser.email}</p>
      <p className="text-sm text-gray-600">
        Role: {currentUser.personRoleModel?.personRoleName}
      </p>
      <div>{children}</div>
    </ValidateLoginContext.Provider>
  );
}
