import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Code2, Globe, Smartphone, Database } from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      icon: <Globe className="h-8 w-8 text-primary" />,
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies like Next.js and React."
    },
    {
      icon: <Smartphone className="h-8 w-8 text-secondary" />,
      title: "App Development",
      description: "Native and cross-platform mobile applications for iOS and Android."
    },
    {
      icon: <Code2 className="h-8 w-8 text-accent" />,
      title: "Student Projects",
      description: "Comprehensive IT solutions for final year projects, including documentation and source code."
    },
    {
      icon: <Database className="h-8 w-8 text-green-500" />,
      title: "Backend Systems",
      description: "Robust and scalable backend architectures using Node.js, Python, and cloud infrastructure."
    }
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <div className="container mx-auto px-4 py-32 flex-1">
        <h1 className="text-4xl font-bold mb-12">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:border-primary/50 transition-colors">
              <CardHeader>
                <div className="mb-4 bg-card/50 w-14 h-14 rounded-xl flex items-center justify-center border border-border">
                  {service.icon}
                </div>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
