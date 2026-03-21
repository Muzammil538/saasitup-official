"use client";

import { useEffect, useState } from "react";
import { app } from "@/lib/firebase";

export default function DebugPage() {
  const [config, setConfig] = useState<any>(null);

  useEffect(() => {
    // Access internal config if possible, or just the env vars
    setConfig({
      apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
      authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
      projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
      storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
      appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
      firebaseAppOptions: app.options,
    });
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Firebase Configuration Debug</h1>
      <pre className="bg-slate-950 text-slate-50 p-4 rounded overflow-auto">
        {JSON.stringify(config, null, 2)}
      </pre>
      <p className="mt-4 text-sm text-muted-foreground">
        If any values are "undefined" or "dummy-...", your environment variables are not loading correctly.
        Please restart your dev server.
      </p>
    </div>
  );
}
