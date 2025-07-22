'use client';

import { useState, useTransition } from 'react';
import { useRouter } from 'next/navigation';
import { loginUser } from '../lib/api';
import { Card, Label, TextInput, Checkbox, Button } from 'flowbite-react';
import { DevicePhoneMobileIcon, DeviceTabletIcon, ShieldCheckIcon, ShieldExclamationIcon } from '@heroicons/react/24/outline';
import { TbDeviceCameraPhone } from 'react-icons/tb';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    startTransition(async () => {
      try {
        const token = await loginUser(email, password);
        sessionStorage.setItem('token', token);
        router.push('/dashboard');
      } catch (err: any) {
        setError(err.message || 'Login failed');
      }
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center">

      <Card className="max-w-md justify-center">
        {error && <p className="text-red-600 text-sm mb-4">{error}</p>}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">

          <h3 className="flex flex-row items-center justify-content-center text-3xl text-center uppercase font-black text-gray-200 shadow-sm opacity-90 ">
            <ShieldCheckIcon className='h-5 w-5' />
            <ShieldExclamationIcon className='h-6 w-6' /> 
            <span>-Tracker-</span> 
            <DeviceTabletIcon className='h-6 w-6' />
            <DevicePhoneMobileIcon className='h-5 w-5' />
          </h3>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email1">Email</Label>
            </div>
            <TextInput id="email1" type="text"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password1">Password</Label>
            </div>
            <TextInput id="password1" type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="remember" />
            <Label htmlFor="remember">Remember me</Label>
          </div>
          <Button disabled={isPending} type="submit">
            {isPending ? 'Signing in...' : 'Sign In'}
          </Button>
        </form>
      </Card>
    </div>
  );
}
