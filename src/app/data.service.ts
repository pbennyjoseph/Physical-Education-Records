import {Injectable} from '@angular/core';
import {AngularFirestore, QuerySnapshot} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  snap: QuerySnapshot<any>;
  constructor(private firestore: AngularFirestore) {
  }

  async submitData(data): Promise<void> {
    await this.firestore.collection('wps').add(data);
  }

  async getData(): Promise<any> {
    this.snap = await this.firestore.collection('wps').ref.get();
    return this.snap.docs.map(doc => doc.data());
  }
}
