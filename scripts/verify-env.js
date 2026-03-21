const fs = require('fs');
const path = require('path');

const envPath = path.join(__dirname, '.env');
if (!fs.existsSync(envPath)) {
  console.error("❌ .env file missing!");
  process.exit(1);
}

const envContent = fs.readFileSync(envPath, 'utf8');
const lines = envContent.split('\n');
const missing = [];

const required = [
  'NEXT_PUBLIC_FIREBASE_API_KEY',
  'NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN',
  'NEXT_PUBLIC_FIREBASE_PROJECT_ID',
  'FIREBASE_ADMIN_PRIVATE_KEY',
  'FIREBASE_ADMIN_CLIENT_EMAIL'
];

required.forEach(key => {
  const line = lines.find(l => l.startsWith(key + '='));
  if (!line) {
    missing.push(key);
  } else {
    const value = line.split('=')[1]?.trim();
    if (!value || value.includes('your_') || value.startsWith('-----BEGIN')) {
      // Technically "-----BEGIN" is a placeholder in the example, but real key also starts with it.
      // But if it is exactly the placeholder string...
      if (value.includes('your_project_id')) missing.push(key + ' (still has placeholder value)');
    }
  }
});

if (missing.length > 0) {
  console.error("❌ Missing or incomplete environment variables:");
  missing.forEach(m => console.error(`   - ${m}`));
  console.log("\nPlease update .env with real values from Firebase Console.");
} else {
  console.log("✅ Environment variables look properly configured (format-wise).");
}
