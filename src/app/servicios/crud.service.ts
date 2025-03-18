import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  constructor(private database: AngularFirestore) {}

  create(coleccion: string, form: any): Promise<string | boolean> {
    return new Promise((resolve, reject) => {
      this.database
        .collection(coleccion)
        .add(form)
        .then((response) => {
          let id = response.id;
          resolve(id);
        })
        .catch((err) => {
          reject(false);
        });
    });
  }
}
