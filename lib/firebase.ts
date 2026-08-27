import {
  applicationDefault,
  cert,
  getApps,
  initializeApp,
} from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

function getFirebaseApp() {
  if (getApps().length > 0) {
    return getApps()[0];
  }

  const serviceAccountBase64 =
    process.env.FIREBASE_SERVICE_ACCOUNT_BASE64;

  if (serviceAccountBase64) {
    const serviceAccount = JSON.parse(
      Buffer.from(serviceAccountBase64, "base64").toString("utf8")
    );

    return initializeApp({
      credential: cert(serviceAccount),
    });
  }

  return initializeApp({
    credential: applicationDefault(),
    projectId: process.env.FIREBASE_PROJECT_ID,
  });
}

const firebaseApp = getFirebaseApp();

export const db = getFirestore(firebaseApp);