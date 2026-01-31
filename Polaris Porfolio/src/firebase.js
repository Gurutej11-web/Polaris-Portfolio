import { initializeApp } from 'firebase/app';
import { getAnalytics, isSupported } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyAdRbLYb1cM5auXM3QiCODmLFAXfNCFtu0",
  authDomain: "polaris-portfolio-fee36.firebaseapp.com",
  projectId: "polaris-portfolio-fee36",
  storageBucket: "polaris-portfolio-fee36.firebasestorage.app",
  messagingSenderId: "103012796931",
  appId: "1:103012796931:web:d7910bfb07fbf2f4dbdc36",
  measurementId: "G-86HG30SGTE"
};

const app = initializeApp(firebaseConfig);

// Initialize Analytics only when supported (e.g., in browser)
isSupported().then((supported) => {
  if (supported) {
    getAnalytics(app);
  }
});

export default app;
