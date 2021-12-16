import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyCtaYDu90P0srPRjoqbqbS7F2gac-cTlcA",
	authDomain: "house-marketplace-app-a9f27.firebaseapp.com",
	projectId: "house-marketplace-app-a9f27",
	storageBucket: "house-marketplace-app-a9f27.appspot.com",
	messagingSenderId: "1045801074246",
	appId: "1:1045801074246:web:570c240bb9206e5268d447",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore();
