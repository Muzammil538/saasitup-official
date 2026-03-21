import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <div className="container mx-auto px-4 py-32 flex-1">
        <h1 className="text-4xl font-bold mb-8">About Us</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-lg text-muted-foreground mb-4">
            SAASITUP (SUP) is dedicated to bridging the gap between innovative ideas and digital reality.
            We specialize in providing top-tier IT solutions for students, educational institutions, and businesses.
          </p>
          <p className="text-lg text-muted-foreground mb-4">
            Our team consists of passionate developers, designers, and strategists who are committed to delivering excellence.
            Whether you need a complex SAAS platform, a student project, or a business website, we have the expertise to bring your vision to life.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
