import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';

export class User {
  async signUp(email: string, password: string): Promise<FirebaseAuthTypes.UserCredential> {
    try {
      console.log('signUp', email, password);
      return await auth().createUserWithEmailAndPassword(email, password);
    } catch (error) {
      throw error;
    }
  }

  async signIn(email: string, password: string): Promise<FirebaseAuthTypes.UserCredential> {
    try {
      console.log('signIn', email, password);
      return await auth().signInWithEmailAndPassword(email, password);
    } catch (error) {
      throw error;
    }
  }

  async signOut(): Promise<void> {
    try {
      return await auth().signOut();
    } catch (error) {
      throw error;
    }
  }
}
