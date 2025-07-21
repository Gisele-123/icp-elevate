import { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { Briefcase, User, Building2, ArrowLeft } from 'lucide-react';

export const RegisterPage = () => {
  const [searchParams] = useSearchParams();
  const [selectedRole, setSelectedRole] = useState(searchParams.get('role') || '');
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    company: '',
    title: '',
    agreeToTerms: false,
    agreeToMarketing: false
  });

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleRoleSelect = (role: string) => {
    setSelectedRole(role);
    setCurrentStep(2);
  };

  const handleNext = () => {
    setCurrentStep(prev => prev + 1);
  };

  const handleBack = () => {
    if (currentStep === 1) return;
    if (currentStep === 2) {
      setSelectedRole('');
    }
    setCurrentStep(prev => prev - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle registration logic here
    console.log('Registration submitted:', { ...formData, role: selectedRole });
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center space-x-2 text-muted-foreground hover:text-primary">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to home</span>
          </Link>
          <h1 className="mt-6 text-3xl font-bold text-foreground">Join TalentNexus</h1>
          <p className="mt-2 text-muted-foreground">
            Create your account and start connecting
          </p>
        </div>

        {/* Progress Indicator */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center space-x-2">
            {[1, 2, 3].map((step) => (
              <div key={step} className="flex items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                    step <= currentStep
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-muted-foreground'
                  }`}
                >
                  {step}
                </div>
                {step < 3 && (
                  <div
                    className={`w-8 h-1 mx-2 ${
                      step < currentStep ? 'bg-primary' : 'bg-muted'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Step 1: Role Selection */}
        {currentStep === 1 && (
          <Card>
            <CardHeader>
              <CardTitle>Choose Your Role</CardTitle>
              <CardDescription>
                Select how you'll be using TalentNexus
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div
                className={`border-2 rounded-lg p-4 cursor-pointer transition-colors ${
                  selectedRole === 'jobseeker'
                    ? 'border-primary bg-primary/5'
                    : 'border-border hover:border-primary/50'
                }`}
                onClick={() => handleRoleSelect('jobseeker')}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <User className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">Job Seeker</div>
                    <div className="text-sm text-muted-foreground">
                      Looking for new opportunities
                    </div>
                  </div>
                </div>
              </div>

              <div
                className={`border-2 rounded-lg p-4 cursor-pointer transition-colors ${
                  selectedRole === 'employer'
                    ? 'border-primary bg-primary/5'
                    : 'border-border hover:border-primary/50'
                }`}
                onClick={() => handleRoleSelect('employer')}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center">
                    <Building2 className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <div className="font-semibold">Employer</div>
                    <div className="text-sm text-muted-foreground">
                      Hiring talented professionals
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Step 2: Basic Information */}
        {currentStep === 2 && (
          <Card>
            <CardHeader>
              <CardTitle>Basic Information</CardTitle>
              <CardDescription>
                Tell us about yourself
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="john@example.com"
                  />
                </div>

                {selectedRole === 'employer' && (
                  <>
                    <div>
                      <Label htmlFor="company">Company</Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => handleInputChange('company', e.target.value)}
                        placeholder="Company Name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="title">Job Title</Label>
                      <Input
                        id="title"
                        value={formData.title}
                        onChange={(e) => handleInputChange('title', e.target.value)}
                        placeholder="e.g., HR Manager, CEO"
                      />
                    </div>
                  </>
                )}

                <div className="flex justify-between">
                  <Button type="button" variant="outline" onClick={handleBack}>
                    Back
                  </Button>
                  <Button type="button" onClick={handleNext}>
                    Continue
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        )}

        {/* Step 3: Security & Preferences */}
        {currentStep === 3 && (
          <Card>
            <CardHeader>
              <CardTitle>Security & Preferences</CardTitle>
              <CardDescription>
                Set up your password and preferences
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    value={formData.password}
                    onChange={(e) => handleInputChange('password', e.target.value)}
                    placeholder="Choose a strong password"
                  />
                </div>

                <div>
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <Input
                    id="confirmPassword"
                    type="password"
                    value={formData.confirmPassword}
                    onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                    placeholder="Confirm your password"
                  />
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="terms"
                      checked={formData.agreeToTerms}
                      onCheckedChange={(checked) => handleInputChange('agreeToTerms', checked as boolean)}
                    />
                    <Label htmlFor="terms" className="text-sm">
                      I agree to the{' '}
                      <Link to="/terms" className="text-primary hover:underline">
                        Terms of Service
                      </Link>{' '}
                      and{' '}
                      <Link to="/privacy" className="text-primary hover:underline">
                        Privacy Policy
                      </Link>
                    </Label>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="marketing"
                      checked={formData.agreeToMarketing}
                      onCheckedChange={(checked) => handleInputChange('agreeToMarketing', checked as boolean)}
                    />
                    <Label htmlFor="marketing" className="text-sm">
                      Send me updates about new features and opportunities
                    </Label>
                  </div>
                </div>

                <div className="flex justify-between">
                  <Button type="button" variant="outline" onClick={handleBack}>
                    Back
                  </Button>
                  <Button 
                    type="submit" 
                    disabled={!formData.agreeToTerms}
                    className="min-w-24"
                  >
                    Create Account
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        )}

        {/* Sign In Link */}
        <div className="text-center mt-6">
          <span className="text-muted-foreground">Already have an account? </span>
          <Link to="/login" className="text-primary hover:underline font-medium">
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
};