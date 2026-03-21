"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Plus, FolderKanban, Clock, CheckCircle, XCircle, AlertCircle, FileCode } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Project {
  displayId: string;
  title?: string; // New field
  description: string;
  status: string;
  price: string | null;
  createdAt: string;
}

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

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

  const statusIcon = (status: string) => {
    switch (status) {
      case "APPROVED": return <CheckCircle className="w-5 h-5 text-green-500" />;
      case "COMPLETED": return <CheckCircle className="w-5 h-5 text-blue-500" />;
      case "REJECTED": return <XCircle className="w-5 h-5 text-red-500" />;
      case "PENDING": return <Clock className="w-5 h-5 text-yellow-500" />;
      default: return <AlertCircle className="w-5 h-5 text-muted-foreground" />;
    }
  };

  return (
    <div className="p-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">My Projects</h1>
          <p className="text-muted-foreground">Manage and track all your project requests.</p>
        </div>
        <Link href="/projects/new">
          <Button className="bg-primary text-primary-foreground shadow-lg hover:shadow-xl transition-all">
            <Plus className="mr-2 h-4 w-4" /> New Project
          </Button>
        </Link>
      </div>

      {loading ? (
        <div className="text-center py-20">Loading your projects...</div>
      ) : projects.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 border border-dashed border-border rounded-xl bg-card/20">
          <div className="w-16 h-16 bg-muted rounded-2xl flex items-center justify-center mb-4 text-muted-foreground">
            <FolderKanban className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-medium mb-2">No projects yet</h3>
          <p className="text-muted-foreground mb-6 max-w-sm text-center">Submit your first project request to get started and track its progress here.</p>
          <Link href="/projects/new">
            <Button variant="secondary">
              <Plus className="mr-2 h-4 w-4" /> Create Project
            </Button>
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card key={project.displayId} className="hover:border-primary/50 transition-colors group">
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-lg font-semibold truncate mb-1">
                      {project.title || "Untitled Project"}
                    </CardTitle>
                    <span className="text-xs font-mono text-muted-foreground">#{project.displayId}</span>
                  </div>
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
                <div className="mt-2 text-xs text-muted-foreground text-right">
                  {new Date(project.createdAt).toLocaleDateString()}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
