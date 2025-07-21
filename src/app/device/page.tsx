'use client';

import { Suspense, useEffect, useState } from 'react';
import { fetchCurrentUser } from '../lib/api';
import DeviceListTable from './DeviceListTable';
export default function DashboardPage() {
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const token = sessionStorage.getItem('token');
    if (!token) {
      setError('No token found. Please log in.');
      return;
    }

    fetchCurrentUser(token)
      .then((res) => setCurrentUser(res.user))
      .catch((err) => setError(err.message || 'Failed to fetch user'));
  }, []);

  if (error) return <p className="p-4 text-red-600">{error}</p>;
  if (!currentUser) return <p className="p-4">Loading user...</p>;

  return (
    <div className="p-10 bg-gray-300 text-gray-900">
      <h1 className="text-xl font-bold mb-4">Welcome, {currentUser.firstName} {currentUser.lastName}</h1>
      <p className="text-sm text-gray-600">Email: {currentUser.email}</p>
      <p className="text-sm text-gray-600">Role: {currentUser.personRoleModel?.personRoleName}</p>
    <Suspense>
      <DeviceListTable/>
    </Suspense>
    </div>

  );
}
