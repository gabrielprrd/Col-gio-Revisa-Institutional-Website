import { initializeApp } from 'firebase';

const app = initializeApp({
    apiKey: "AIzaSyAlRgkmu4ogmlXBoci2DBOeGGX5WIgsAMc",
    authDomain: "colegio-revisa.firebaseapp.com",
    databaseURL: "https://colegio-revisa.firebaseio.com",
    projectId: "colegio-revisa",
    storageBucket: "colegio-revisa.appspot.com",
    messagingSenderId: "216166593890"
  });

export const db = app.database();
export const contactNameRef = db.ref('contactInfo'); // information from Contact form
export const applyNameRef = db.ref('applyInfo'); // information from WorkWithUs form