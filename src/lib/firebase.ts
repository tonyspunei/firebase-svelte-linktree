import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC9lHDiM5tw7BABXBHtiI-8QLtE1hZnZSI",
  authDomain: "fireship-svelte-linktree-96822.firebaseapp.com",
  projectId: "fireship-svelte-linktree-96822",
  storageBucket: "fireship-svelte-linktree-96822.appspot.com",
  messagingSenderId: "327867253565",
  appId: "1:327867253565:web:805af6d7a96ea390863b54"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth();
export const storage = getStorage();
