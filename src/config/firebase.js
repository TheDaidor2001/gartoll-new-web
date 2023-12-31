import { initializeApp } from 'firebase/app'
import { initializeFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: '900172286782',
  appId: import.meta.env.VITE_APP_ID
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = initializeFirestore(app, {
  experimentalForceLongPolling: true
})

export { db }
