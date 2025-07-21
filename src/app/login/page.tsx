'use client';

import { useState, useTransition } from 'react';
import { useRouter } from 'next/navigation';
import { loginUser } from '../lib/api';
import { Card, Label, TextInput, Checkbox, Button } from 'flowbite-react';

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

      <Card className="max-w-sm justify-center">
        {error && <p className="text-red-600 text-sm mb-4">{error}</p>}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email1">Your email</Label>
            </div>
            <TextInput id="email1" type="text"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password1">Your password</Label>
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
