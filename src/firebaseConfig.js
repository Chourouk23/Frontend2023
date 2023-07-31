import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// Initialize Firebase
const app = initializeApp ({
apiKey: "AIzaSyB4tGXaI_D4ZvDK3n_SHfsvUq1S2nCZUAk",
authDomain: "reactproject-d49a3.firebaseapp.com",
  projectId: "reactproject-d49a3",
  storageBucket: "reactproject-d49a3.appspot.com",
  messagingSenderId: "230998997065",
  appId: "1:230998997065:web:399c96a359ba91b8e52798"
});
// Firebase storage reference
const storage = getStorage(app);
export default storage;