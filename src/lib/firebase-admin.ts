import "server-only";
import * as admin from "firebase-admin";

function formatPrivateKey(key: string) {
  return key.replace(/\\n/g, "\n");
}

let adminAuth: admin.auth.Auth;
let adminDb: admin.firestore.Firestore;
let initError: Error | null = null;

try {
  if (!admin.apps.length) {
    const projectId = process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID;
    const clientEmail = process.env.FIREBASE_ADMIN_CLIENT_EMAIL;
    const privateKey = process.env.FIREBASE_ADMIN_PRIVATE_KEY;

    if (projectId && clientEmail && privateKey && !privateKey.includes("-----BEGIN PRIVATE KEY-----\\n...")) {
      admin.initializeApp({
        credential: admin.credential.cert({
          projectId,
          clientEmail,
          privateKey: formatPrivateKey(privateKey),
        }),
      });
    } else {
      // Initializes with default credentials or dummy app to allow build to proceed
      // If we are in production, we might want to crash if env vars are missing?
      // But for development, let's just log a warning and use a dummy app 
      // which will throw errors when used, but not crash import.
      console.warn("Firebase Admin SDK: Missing or invalid environment variables. Using placeholder app.");
      admin.initializeApp({
        projectId: "build-placeholder",
      }, "build-placeholder-app");
    }
  }

  // If we initialized a placeholder app above (e.g. named "build-placeholder-app"),
  // getAuth/getFirestore might throw or return a dummy instance.
  // Actually, let's just use the default app if it exists.

  const app = admin.apps.find(a => a?.name === "[DEFAULT]") || admin.apps[0];

  if (app) {
    adminAuth = app.auth();
    adminDb = app.firestore();
  } else {
    throw new Error("Failed to initialize Firebase Admin App"); // Should not happen
  }

} catch (error: any) {
  console.error("Firebase Admin SDK Initialization Error:", error);
  initError = error;

  // Assign dummy objects that throw on access so we don't crash imports in other files
  // but fail clearly at runtime.
  adminAuth = {
    createSessionCookie: async () => { throw new Error(`Firebase Admin Logic Error: ${initError?.message}`); },
    verifySessionCookie: async () => { throw new Error(`Firebase Admin Logic Error: ${initError?.message}`); },
    getUser: async () => { throw new Error(`Firebase Admin Logic Error: ${initError?.message}`); },
  } as any;

  adminDb = {
    collection: () => { throw new Error(`Firebase Admin Logic Error: ${initError?.message}`); },
    doc: () => { throw new Error(`Firebase Admin Logic Error: ${initError?.message}`); }
  } as any;
}

export { adminAuth, adminDb, initError };
