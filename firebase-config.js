// ⚠️ PASO 2 del README: reemplazá estos valores por los de TU proyecto de Firebase.
// Los encontrás en: Firebase Console > ⚙️ Configuración del proyecto > "Tus apps" > SDK setup and configuration.
// Estas claves no son secretas (están pensadas para estar en el navegador); la seguridad real
// la dan el login (Authentication) y las reglas de Firestore que configurás en el paso 4.

const firebaseConfig = {
   apiKey: "AIzaSyAIA_lzbCrJwhSUCDluTyRdfh1iNz85dSQ",
  authDomain: "stock-barra-monono.firebaseapp.com",
  projectId: "stock-barra-monono",
  storageBucket: "stock-barra-monono.firebasestorage.app",
  messagingSenderId: "839338957179",
  appId: "1:839338957179:web:591730c7f5cbc3707945de"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
