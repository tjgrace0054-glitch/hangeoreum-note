importScripts(
  "https://www.gstatic.com/firebasejs/10.14.1/firebase-app-compat.js"
);

importScripts(
  "https://www.gstatic.com/firebasejs/10.14.1/firebase-messaging-compat.js"
);

firebase.initializeApp({
  apiKey: "AIzaSyDTNuVYyxKOj6awIo_xEES9ORqEG40gGto",
  authDomain: "hangeoreum-note.firebaseapp.com",
  projectId: "hangeoreum-note",
  storageBucket: "hangeoreum-note.firebasestorage.app",
  messagingSenderId: "664829259339",
  appId: "1:664829259339:web:4c0eea7dac460cfa0a8e7ce",
  measurementId: "G-1CTL24EHQK"
});

firebase.messaging();
