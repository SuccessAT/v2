import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation'

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/api/auth/login/', { username, password });
            localStorage.setItem('access_token', response.data.access);
            alert('Login successful!');
        } catch (error) {
            console.error('Login error:', error);
        }
    };

    return (
        <form onSubmit={handleLogin}>
            <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            <button type="submit">Login</button>
        </form>
    );
};

export default function LoginPage() {
    const [formData, setFormData] = useState({
      email: '',
      password: '',
    })
    const [error, setError] = useState('')
    const router = useRouter()
  
    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault()
      try {
        const response = await fetch('/api/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        })
        if (response.ok) {
          router.push('/dashboard')
        } else {
          const data = await response.json()
          setError(data.error || 'Login failed')
        }
      } catch (error) {
        setError('An error occurred. Please try again.')
      }
    }
};

// export default Login;
