import {
  applicationDefault,
  getApps,
  initializeApp,
} from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

const firebaseApp =
  getApps().length === 0
    ? initializeApp({
        credential: applicationDefault(),
        projectId: process.env.FIREBASE_PROJECT_ID,
      })
    : getApps()[0];

export const db = getFirestore(firebaseApp);