"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, FolderKanban, Clock, CheckCircle, FileCode } from "lucide-react";
import { useEffect, useState } from "react";
import { auth } from "@/lib/firebase";

interface Project {
  displayId: string;
  description: string;
  status: string;
  price: string | null;
  createdAt: string;
}

export default function CustomerDashboard() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newProjectDesc, setNewProjectDesc] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const user = auth.currentUser;

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const res = await fetch("/api/projects");
      if (res.ok) {
        const data = await res.json();
        setProjects(data.projects);
      }
    } catch (error) {
      console.error("Failed to fetch projects");
    } finally {
      setLoading(false);
    }
  };

  const handleCreateProject = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch("/api/projects", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ description: newProjectDesc }),
      });
      if (res.ok) {
        setNewProjectDesc("");
        setIsModalOpen(false);
        fetchProjects();
      }
    } catch (error) {
      console.error("Failed to create project");
    } finally {
      setSubmitting(false);
    }
  };

  const activeProjects = projects.filter(p => p.status !== 'COMPLETED' && p.status !== 'REJECTED').length;
  const completedProjects = projects.filter(p => p.status === 'COMPLETED').length;

  return (
    <div className="p-8">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            Hello, {user?.displayName || user?.email?.split('@')[0] || 'User'}
          </h1>
          <p className="text-muted-foreground">Here is what’s happening with your projects today.</p>
        </div>
        <Button onClick={() => setIsModalOpen(true)} className="bg-primary text-primary-foreground shadow-lg hover:shadow-xl transition-all">
          <Plus className="mr-2 h-4 w-4" /> New Project
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <Card className="bg-card/50 border-border/50 shadow-sm">
          <CardContent className="p-6 flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground mb-1">Active Projects</p>
              <h2 className="text-4xl font-bold">{activeProjects}</h2>
            </div>
            <div className="w-12 h-12 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-500">
              <Clock className="w-6 h-6" />
            </div>
          </CardContent>
        </Card>
        <Card className="bg-card/50 border-border/50 shadow-sm">
          <CardContent className="p-6 flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground mb-1">Completed</p>
              <h2 className="text-4xl font-bold">{completedProjects}</h2>
            </div>
            <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center text-green-500">
              <CheckCircle className="w-6 h-6" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Projects List or Empty State */}
      <h3 className="text-xl font-semibold mb-4 text-foreground/80">Recent Projects</h3>

      {loading ? (
        <div className="text-center py-20">Loading...</div>
      ) : projects.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 border border-dashed border-border rounded-xl bg-card/20">
          <div className="w-16 h-16 bg-muted rounded-2xl flex items-center justify-center mb-4 text-muted-foreground">
            <FolderKanban className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-medium mb-2">No projects yet</h3>
          <p className="text-muted-foreground mb-6 max-w-sm text-center">Submit your first project request to get started and track its progress here.</p>
          <Button onClick={() => setIsModalOpen(true)} variant="secondary">
            <Plus className="mr-2 h-4 w-4" /> Create Project
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card key={project.displayId} className="hover:border-primary/50 transition-colors group">
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg font-mono text-primary">#{project.displayId}</CardTitle>
                  <span className={`px-2 py-1 rounded-full text-xs font-bold ${project.status === 'APPROVED' ? 'bg-green-500/10 text-green-500' :
                      project.status === 'COMPLETED' ? 'bg-blue-500/10 text-blue-500' :
                        project.status === 'REJECTED' ? 'bg-red-500/10 text-red-500' :
                          'bg-yellow-500/10 text-yellow-500'
                    }`}>
                    {project.status}
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-foreground/70 line-clamp-3 mb-4 h-[4.5em]">
                  {project.description}
                </p>
                <div className="flex justify-between items-center text-sm pt-4 border-t border-border/50">
                  <span className="text-muted-foreground">Price</span>
                  <span className="font-semibold text-foreground">
                    {project.price ? `$${project.price}` : "Pending Quote"}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* New Project Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full max-w-lg"
            >
              <Card className="border-primary/20 shadow-2xl">
                <CardHeader>
                  <CardTitle>Request New Project</CardTitle>
                  <CardDescription>Tell us what you need. We'll review it and get back to you with a quote.</CardDescription>
                </CardHeader>
                <form onSubmit={handleCreateProject}>
                  <CardContent>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Project Description</label>
                      <textarea
                        className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Describe your project requirements in detail..."
                        value={newProjectDesc}
                        onChange={(e) => setNewProjectDesc(e.target.value)}
                        required
                      />
                    </div>
                  </CardContent>
                  <CardFooter className="justify-between bg-muted/20">
                    <Button type="button" variant="ghost" onClick={() => setIsModalOpen(false)}>Cancel</Button>
                    <Button type="submit" disabled={submitting}>
                      {submitting ? "Submitting..." : "Submit Request"}
                    </Button>
                  </CardFooter>
                </form>
              </Card>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
