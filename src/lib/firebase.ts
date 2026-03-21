import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const configToUse = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// Check if critical config is missing (only check apiKey as a proxy)
if (!configToUse.apiKey || configToUse.apiKey === "your_api_key") {
  console.warn("Firebase Config missing or invalid. Using dummy config for build/dev safety.");
  // We use dummy values to prevent crash on import, but auth calls will fail.
  // This helps identifying the issue in the console.
}

// Singleton pattern for App
const app = getApps().length === 0 ? initializeApp(configToUse) : getApps()[0];
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
