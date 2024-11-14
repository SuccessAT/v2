import { useState } from 'react';
import { Button } from './button';
import { Input } from './input';
import { Label } from './label';
import { DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogClose } from './dialog';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AuthDialog = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setError('');

    const form = event.currentTarget;
    const isLogin = form.getAttribute('data-form-type') === 'login';
    const endpoint = isLogin ? 'http://localhost:8000/api/auth/login' : 'http://localhost:8000/api/auth/register';

    try {
      const response = await axios.post(endpoint, {
        username: form.username.value,
        password: form.password.value,
        ...(isLogin ? {} : { email: form.email.value }),
      });

      if (response.data.success) {
        if (isLogin) {
          navigate('/create-blog-post');
        } else {
          setError('Registration successful. Please log in.');
        }
      } else {
        setError(response.data.message || 'An error occurred. Please try again.');
      }
    } catch (error) {
      setError('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Authentication</DialogTitle>
        <DialogDescription>
          Please log in or create an account to get started.
        </DialogDescription>
      </DialogHeader>
      <form onSubmit={handleSubmit} data-form-type="login">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="username">Username</Label>
            <Input id="username" name="username" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" name="password" type="password" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email (optional for registration)</Label>
            <Input id="email" name="email" type="email" />
          </div>
        </div>
        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? 'Loading...' : 'Submit'}
        </Button>
        {error && <div className="text-red-500">{error}</div>}
      </form>
      <DialogClose className="absolute right-4 top-4">Close</DialogClose>
    </DialogContent>
  );
};

export default AuthDialog;
