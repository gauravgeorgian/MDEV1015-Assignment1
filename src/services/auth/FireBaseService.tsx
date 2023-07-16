// AuthService.ts
import firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './firebaseConfig';

firebase.initializeApp(firebaseConfig);

class AuthService {
    registerUser = async (email: string, password: string) => {
        try {
          const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password);
          // Handle successful registration
        } catch (error) {
          // Handle registration error
        }
      }

  loginUser = async (email: string, password: string) => {
    try {
      const userCredential = await firebase.auth().signInWithEmailAndPassword(email, password);
      // Handle successful login
    } catch (error) {
      // Handle login error
    }
  };

  logoutUser = async () => {
    try {
      await firebase.auth().signOut();
      // Handle successful logout
    } catch (error) {
      // Handle logout error
    }
  };
}

export default new AuthService();
