import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {User} from './user.model';
import {AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';
import {switchMap} from 'rxjs/operators';
import {auth} from 'firebase';
import {CommonModule} from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$: Observable<User>;

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router,
  ) {
    this.user$ = this.afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        } else {
          return of(null);
        }
      })
    );
  }


  async googleSignIn(): Promise<void> {
    const provider = new auth.GoogleAuthProvider();
    try {
      await this.afAuth.signInWithPopup(provider);
    } catch (e){
      console.log(e.message);
    }
    const user = await this.afAuth.currentUser;
    if (user) {
      return this.updateUserData(user);
    } else {
      return;
    }
  }

  private updateUserData({uid, email, displayName, photoURL}: { uid: any; email: any; displayName: any; photoURL: any; }): Promise<void> {

    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${uid}`);
    const data = {
      uid,
      email,
      displayName,
      photoURL,
    };

    return userRef.set(data, {merge: true});
  }

  async signOut(): Promise<void> {
    await this.afAuth.signOut();
    await this.router.navigate(['/']);
  }

}
