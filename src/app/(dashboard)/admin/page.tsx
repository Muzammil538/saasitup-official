"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";

interface Project {
  displayId: string;
  description: string;
  status: string;
  price: string | null;
  createdAt: string;
  user: { email: string };
}

export default function AdminDashboard() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState<string | null>(null);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      // Assuming API now returns all projects for admin
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

  const handleUpdate = async (id: string, updates: any) => {
    setUpdating(id);
    try {
      const res = await fetch(`/api/projects/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updates),
      });
      if (res.ok) {
        fetchProjects();
      }
    } catch (error) {
      console.error("Failed to update project");
    } finally {
      setUpdating(null);
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>

      {loading ? (
        <div className="flex justify-center py-20"><Loader2 className="animate-spin" /></div>
      ) : (
        <div className="grid grid-cols-1 gap-6">
          {projects.map((project) => (
            <Card key={project.displayId} className="flex flex-col md:flex-row md:items-center justify-between p-6 gap-4 bg-card/40">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-mono bg-muted px-2 py-1 rounded text-sm">#{project.displayId}</span>
                  <span className={`text-xs font-bold px-2 py-1 rounded-full border ${project.status === 'APPROVED' ? 'border-green-500 text-green-500' :
                    project.status === 'REJECTED' ? 'border-red-500 text-red-500' :
                      'border-yellow-500 text-yellow-500'
                    }`}>
                    {project.status}
                  </span>
                  <span className="text-sm text-muted-foreground ml-auto md:ml-2">
                    {project.user?.email || "User"}
                  </span>
                </div>
                <p className="text-sm mb-4">{project.description}</p>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <label className="text-sm">Price:</label>
                    <Input
                      type="number"
                      placeholder="0.00"
                      className="w-32 h-8"
                      defaultValue={project.price as string}
                      onBlur={(e) => handleUpdate(project.displayId, { price: e.target.value })}
                    />
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                {project.status === 'PENDING' && (
                  <>
                    <Button
                      size="sm"
                      className="bg-green-600 hover:bg-green-700 text-white"
                      disabled={updating === project.displayId}
                      onClick={() => handleUpdate(project.displayId, { status: "APPROVED" })}
                    >
                      Approve
                    </Button>
                    <Button
                      size="sm"
                      variant="destructive"
                      disabled={updating === project.displayId}
                      onClick={() => handleUpdate(project.displayId, { status: "REJECTED" })}
                    >
                      Reject
                    </Button>
                  </>
                )}
                <Button
                  size="sm"
                  variant="outline"
                  disabled={updating === project.displayId}
                  onClick={() => handleUpdate(project.displayId, { status: project.status === 'COMPLETED' ? 'IN_PROGRESS' : 'COMPLETED' })}
                >
                  Mark {project.status === 'COMPLETED' ? 'In Progress' : 'Completed'}
                </Button>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
