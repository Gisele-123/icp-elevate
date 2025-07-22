import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/sonner';

const PostJobPage = () => {
  const [form, setForm] = useState({
    title: '',
    company: '',
    location: '',
    salary: '',
    jobType: '',
    skills: '',
    description: '',
    deadline: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (field, value) => {
    setForm(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      toast.success('Job posted successfully!');
      setForm({
        title: '', company: '', location: '', salary: '', jobType: '', skills: '', description: '', deadline: ''
      });
    }, 1200);
  };

  return (
    <div className="max-w-xl mx-auto py-12 px-4">
      <h1 className="text-2xl font-bold mb-6 text-center">Post a New Job</h1>
      <form onSubmit={handleSubmit} className="space-y-4 bg-card p-6 rounded-lg shadow">
        <Input
          placeholder="Job Title"
          value={form.title}
          onChange={e => handleChange('title', e.target.value)}
          required
        />
        <Input
          placeholder="Company Name"
          value={form.company}
          onChange={e => handleChange('company', e.target.value)}
          required
        />
        <Input
          placeholder="Location"
          value={form.location}
          onChange={e => handleChange('location', e.target.value)}
          required
        />
        <Input
          placeholder="Salary (e.g. $120K - $180K)"
          value={form.salary}
          onChange={e => handleChange('salary', e.target.value)}
        />
        <Input
          placeholder="Job Type (e.g. Full-time, Contract)"
          value={form.jobType}
          onChange={e => handleChange('jobType', e.target.value)}
        />
        <Input
          placeholder="Required Skills (comma separated)"
          value={form.skills}
          onChange={e => handleChange('skills', e.target.value)}
        />
        <textarea
          className="w-full rounded-md border border-input bg-background px-3 py-2 text-base placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 min-h-[100px]"
          placeholder="Job Description"
          value={form.description}
          onChange={e => handleChange('description', e.target.value)}
          required
        />
        <Input
          type="date"
          placeholder="Application Deadline"
          value={form.deadline}
          onChange={e => handleChange('deadline', e.target.value)}
        />
        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? 'Posting...' : 'Post Job'}
        </Button>
      </form>
    </div>
  );
};

export default PostJobPage; 