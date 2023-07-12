import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { writable } from "svelte/store";

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

/**
 * @returns a store with the current firebase user
 */
function userStore() {
  let unsubscribe: () => void;

  if(!auth || !globalThis.window) {
    console.warn('Auth is not initialized or not in browser');
    const { subscribe } = writable<User | null>(null);
    return {
      subscribe
    }
  }

  const { subscribe } = writable(auth?.currentUser, (set) => {
    unsubscribe = onAuthStateChanged(auth, (user) => {
      set(user)
    });

    return () => unsubscribe();
  });

  return {
    subscribe
  }
}

export const user = userStore();