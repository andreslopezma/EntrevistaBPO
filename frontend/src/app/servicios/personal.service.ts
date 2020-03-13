import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { Personal } from '../modelos/personal';
import { Fotos } from '../modelos/fotos';

@Injectable({
  providedIn: 'root'
})
export class PersonalService {

  personalSelecionado: Personal;
  private photosUrl: string = 'https://jsonplaceholder.typicode.com/users';
  readonly URL_API = 'http://localhost:3000/api/employees/';
  arrayEmpleados: Personal [];
  arrayFotos: Fotos [];
  constructor(private http: HttpClient ) {
    this.personalSelecionado = new Personal();
  }

  getEmpleoyes() {
    return this.http.get(this.URL_API);
  }

  postEmpleoyee(personal: Personal) {
    return this.http.post(this.URL_API, personal);
  }
  putEmpleoye(personal: Personal) {
    return this.http.put(this.URL_API + `/${personal.id}`, personal );
  }
  deleteempleoye(id: string) {
    return this.http.delete(this.URL_API + `/${id}`);
  }
  traerDatosApi(): Observable<Fotos[]> {
    return this.http.get<Fotos[]>(this.photosUrl);
  }
}
