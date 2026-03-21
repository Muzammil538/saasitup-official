"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea"; // Assuming we have this, or use standard textarea
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, Send } from "lucide-react";
import Link from "next/link";

export default function NewProjectPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    projectType: "",
    deadline: "",
    techStack: "",
    budgetRange: "",
    referenceUrls: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, projectType: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/projects", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        router.push("/projects");
        router.refresh();
      } else {
        console.error("Failed to create project");
      }
    } catch (error) {
      console.error("Error creating project:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <div className="mb-6">
        <Link href="/dashboard" className="text-sm text-muted-foreground hover:text-primary flex items-center gap-1 mb-2">
          <ArrowLeft className="w-4 h-4" /> Back to Dashboard
        </Link>
        <h1 className="text-3xl font-bold tracking-tight">New Project Request</h1>
        <p className="text-muted-foreground">Fill out the details below and we'll get started</p>
      </div>

      <Card className="border-border/50 shadow-md">
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-6 pt-6">

            <div className="space-y-2">
              <label htmlFor="title" className="text-sm font-medium">Project Title *</label>
              <Input
                id="title"
                name="title"
                placeholder="e.g. Company Portfolio Website"
                value={formData.title}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="description" className="text-sm font-medium">Description *</label>
              <textarea
                id="description"
                name="description"
                className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="Describe your project in detail — goals, features, target audience..."
                value={formData.description}
                onChange={handleChange}
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">Project Type *</label>
                <Select onValueChange={handleSelectChange} required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="web_development">Web Development</SelectItem>
                    <SelectItem value="mobile_app">Mobile App</SelectItem>
                    <SelectItem value="ui_ux_design">UI/UX Design</SelectItem>
                    <SelectItem value="custom_software">Custom Software</SelectItem>
                    <SelectItem value="consulting">Consulting</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <label htmlFor="deadline" className="text-sm font-medium">Preferred Deadline</label>
                <Input
                  id="deadline"
                  name="deadline"
                  type="date"
                  value={formData.deadline}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="techStack" className="text-sm font-medium">Tech Stack Preferences</label>
              <Input
                id="techStack"
                name="techStack"
                placeholder="e.g. React, Node.js, PostgreSQL"
                value={formData.techStack}
                onChange={handleChange}
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="budgetRange" className="text-sm font-medium">Budget Range</label>
              <Input
                id="budgetRange"
                name="budgetRange"
                placeholder="e.g. $500-$1000"
                value={formData.budgetRange}
                onChange={handleChange}
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="referenceUrls" className="text-sm font-medium">Reference URLs</label>
              <Input
                id="referenceUrls"
                name="referenceUrls"
                placeholder="Links to similar projects or inspiration"
                value={formData.referenceUrls}
                onChange={handleChange}
              />
            </div>

          </CardContent>
          <CardFooter className="bg-muted/10 flex justify-end p-6">
            <Button type="submit" size="lg" className="w-full md:w-auto bg-gradient-to-r from-primary to-secondary text-white" disabled={loading}>
              {loading ? "Submitting..." : (
                <>
                  Submit Request <Send className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
