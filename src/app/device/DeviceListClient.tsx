"use client";
import { useEffect, useState } from 'react';
import { fetchDeviceListPaginated } from '../lib/api';
import DeviceListTable from './DeviceListTable';
import Loader from '../components/ui/Loader';

export default function DeviceListClient() {
  const [deviceList, setDeviceList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const token = sessionStorage.getItem('token');
    if (!token) {
      setError('No token found.');
      setLoading(false);
      return;
    }

    fetchDeviceListPaginated(token, 1, 5)
      .then(setDeviceList)
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <Loader />;
  if (error) return <p className="text-red-600 p-4">{error}</p>;

  return <DeviceListTable deviceList={deviceList} />;
}
