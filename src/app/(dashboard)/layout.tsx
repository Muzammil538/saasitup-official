import { Sidebar } from "@/components/Sidebar";
// We need to know if user is admin to pass to Sidebar. 
// checking cookies in Layout is possible.

import { cookies } from "next/headers";
import { adminAuth, adminDb } from "@/lib/firebase-admin";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const sessionCookie = (await cookies()).get("session")?.value;
  let isAdmin = false;

  if (sessionCookie) {
    try {
      const decodedClaims = await adminAuth.verifySessionCookie(sessionCookie, true);
      const userDoc = await adminDb.collection("users").doc(decodedClaims.uid).get();
      if (userDoc.exists && userDoc.data()?.role === "ADMIN") {
        isAdmin = true;
      }
    } catch (e) {
      // Validation failed, middleware handles redirect usually
    }
  }

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar isAdmin={isAdmin} />
      <main className="flex-1 overflow-auto">
        {children}
      </main>
    </div>
  );
}
