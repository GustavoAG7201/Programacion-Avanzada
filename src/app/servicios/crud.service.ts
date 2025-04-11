import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

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

  getAll(coleccion: string): Observable<any[]> {
    return this.database.collection(coleccion).valueChanges({ idField: 'id' });
  }

  update(coleccion: string, id: string, data: any): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.database
        .collection(coleccion)
        .doc(id)
        .update(data)
        .then(() => resolve(true))
        .catch(() => reject(false));
    });
  }

  delete(coleccion: string, id: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.database
        .collection(coleccion)
        .doc(id)
        .delete()
        .then(() => resolve(true))
        .catch(() => reject(false));
    });
  }
}
