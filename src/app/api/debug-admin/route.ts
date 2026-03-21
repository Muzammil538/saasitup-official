import { NextResponse } from "next/server";
import { adminAuth, adminDb } from "@/lib/firebase-admin";
import * as admin from "firebase-admin";

export async function GET() {
  try {
    const apps = admin.apps.length;
    const appId = admin.apps[0]?.options.projectId;
    const credential = admin.apps[0]?.options.credential;

    // Attempt a simple operation
    let authCheck = "Unknown";
    try {
      await adminAuth.listUsers(1);
      authCheck = "Success (List Users)";
    } catch (e: any) {
      authCheck = `Failed: ${e.message}`;
    }

    return NextResponse.json({
      status: "Admin SDK Debug",
      appsCount: apps,
      projectId: appId,
      authCheck,
      env: {
        hasPrivateKey: !!process.env.FIREBASE_ADMIN_PRIVATE_KEY,
        hasClientEmail: !!process.env.FIREBASE_ADMIN_CLIENT_EMAIL,
        projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID
      }
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message, stack: error.stack }, { status: 500 });
  }
}
