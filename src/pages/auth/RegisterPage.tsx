import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Fingerprint } from 'lucide-react';

export const RegisterPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Handle registration logic here
    setTimeout(() => setIsLoading(false), 1000);
  };

  const handleInternetIdentitySignup = () => {
    // Handle Internet Identity signup logic here
    alert('Internet Identity sign up (ICP blockchain) coming soon!');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-6 p-8 bg-card rounded-lg shadow">
        <h1 className="text-2xl font-bold text-center">Create your Elevate account</h1>
        <Button
          type="button"
          variant="outline"
          className="w-full flex items-center justify-center"
          onClick={handleInternetIdentitySignup}
        >
          <Fingerprint className="w-4 h-4 mr-2" />
          Sign up with Internet Identity
        </Button>
        <div className="flex items-center my-4">
          <div className="flex-grow h-px bg-border" />
          <span className="mx-3 text-muted-foreground text-xs uppercase">or</span>
          <div className="flex-grow h-px bg-border" />
        </div>
        <div>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={e => handleInputChange('email', e.target.value)}
            placeholder="Email"
            required
          />
        </div>
        <div>
          <Input
            id="password"
            type="password"
            value={formData.password}
            onChange={e => handleInputChange('password', e.target.value)}
            placeholder="Password"
            required
          />
        </div>
        <div>
          <Input
            id="confirmPassword"
            type="password"
            value={formData.confirmPassword}
            onChange={e => handleInputChange('confirmPassword', e.target.value)}
            placeholder="Confirm Password"
            required
          />
        </div>
        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? 'Creating account...' : 'Sign Up'}
        </Button>
      </form>
    </div>
  );
};