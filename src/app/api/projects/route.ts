import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { adminAuth, adminDb } from "@/lib/firebase-admin";

export async function GET(req: Request) {
  try {
    const sessionCookie = (await cookies()).get("session")?.value;
    if (!sessionCookie) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    try {
      const decodedClaims = await adminAuth.verifySessionCookie(sessionCookie, true);
      const uid = decodedClaims.uid;

      const userDoc = await adminDb.collection("users").doc(uid).get();
      const userData = userDoc.data();
      const role = userData?.role || "USER";

      let projects = [];

      if (role === "ADMIN") {
        const snapshot = await adminDb.collection("projects").orderBy("createdAt", "desc").get();
        projects = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      } else {
        const snapshot = await adminDb.collection("projects").where("userId", "==", uid).orderBy("createdAt", "desc").get();
        projects = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      }

      return NextResponse.json({ projects }, { status: 200 });
    } catch (e) {
      return NextResponse.json({ error: "Invalid session" }, { status: 401 });
    }
  } catch (error) {
    console.error("Get projects error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const sessionCookie = (await cookies()).get("session")?.value;
    if (!sessionCookie) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const decodedClaims = await adminAuth.verifySessionCookie(sessionCookie, true);
    const uid = decodedClaims.uid;

    const { title, description, projectType, deadline, techStack, budgetRange, referenceUrls } = await req.json();

    // Generate 6-digit Display ID
    let displayId = Math.floor(100000 + Math.random() * 900000).toString();

    const newProject = {
      displayId,
      userId: uid,
      title: title || "New Project",
      description,
      projectType,
      deadline,
      techStack,
      budgetRange: budgetRange || null, // Allow user budget or set to null
      referenceUrls,
      status: "PENDING",
      price: null, // Admin sets this price (quote), separate from user's budget range
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    const docRef = await adminDb.collection("projects").add(newProject);

    return NextResponse.json({ project: { id: docRef.id, ...newProject } }, { status: 201 });
  } catch (error) {
    console.error("Create project error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
