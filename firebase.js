// Import Firebase
import { initializeApp, getApps, getApp } from 'firebase/app';
import { initializeAuth, getAuth, getReactNativePersistence } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import {getDatabase} from 'firebase/database'
import AsyncStorage from '@react-native-async-storage/async-storage';

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBLQbdJO0cFVGskrMkcjNdJ-o5crEr9SrI",
    authDomain: "mood-lift-e41f0.firebaseapp.com",
    projectId: "mood-lift-e41f0",
    storageBucket: "mood-lift-e41f0.firebasestorage.app",
    messagingSenderId: "961532256453",
    appId: "1:961532256453:web:ffbbb85e123668b2da90ac",
    measurementId: "G-X3WJNCB7NM"
};

// Initialize Firebase App
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

// Initialize Firebase Auth with AsyncStorage persistence only once
let auth;
try {
    auth = getAuth(app);
} catch (e) {
    auth = initializeAuth(app, {
        persistence: getReactNativePersistence(AsyncStorage)
    });
}

// Firestore and Storage
const db = getFirestore(app);
const storage = getStorage(app);
const rtdb = getDatabase(app)

export { auth, db, storage,rtdb };
