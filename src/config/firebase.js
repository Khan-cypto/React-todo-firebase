// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { addDoc, getFirestore, getDocs, collection } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-m4ETjWpuquAWba5aLuPnIItSEfXaaxU",
  authDomain: "react-todo-firebase-1d731.firebaseapp.com",
  projectId: "react-todo-firebase-1d731",
  storageBucket: "react-todo-firebase-1d731.appspot.com",
  messagingSenderId: "898950114241",
  appId: "1:898950114241:web:d3ebd6ea3a92bf574cdd40"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore();

const todoRef = collection(db, 'todos');
// For Practice
const todoRefAlt = collection(db, 'names')

export{
  addDoc,
  app,
  db,
  todoRef,
  getDocs,
  collection,
  todoRefAlt
}