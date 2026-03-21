import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { adminAuth, adminDb } from "@/lib/firebase-admin";

export async function PATCH(req: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const sessionCookie = (await cookies()).get("session")?.value;

    if (!sessionCookie) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const decodedClaims = await adminAuth.verifySessionCookie(sessionCookie, true);
    // Ideally verify role again here:
    const adminCheck = await adminAuth.getUser(decodedClaims.uid);
    // Or check Firestore user doc role
    const userDoc = await adminDb.collection("users").doc(decodedClaims.uid).get();
    if (userDoc.data()?.role !== "ADMIN") {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    const { id } = await params;
    const { status, price } = await req.json();

    const data: any = {};
    if (status) data.status = status;
    if (price !== undefined) data.price = price;
    data.updatedAt = new Date().toISOString();

    // Find project by displayId (since URL uses displayId)
    const snapshot = await adminDb.collection("projects").where("displayId", "==", id).limit(1).get();

    if (snapshot.empty) {
      return NextResponse.json({ error: "Project not found" }, { status: 404 });
    }

    const docId = snapshot.docs[0].id;
    await adminDb.collection("projects").doc(docId).update(data);

    return NextResponse.json({ message: "Project updated", project: { displayId: id, ...data } }, { status: 200 });

  } catch (error) {
    console.error("Update project error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
