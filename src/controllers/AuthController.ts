import { User } from '../models/User';

export class AuthController {
  private userModel: User;

  constructor() {
    this.userModel = new User();
  }

  async signUp(email: string, password: string) {
    try {
      const userCredential = await this.userModel.signUp(email, password);
      // update your view here with the new user
    } catch (error) {
      // handle error
    }
  }

  async signIn(email: string, password: string) {
    try {
      const userCredential = await this.userModel.signIn(email, password);
      // update your view here with the user who just signed in
    } catch (error) {
      // handle error
    }
  }

  async signOut() {
    try {
      await this.userModel.signOut();
      // update your view here to reflect that the user has signed out
    } catch (error) {
      // handle error
    }
  }
}
