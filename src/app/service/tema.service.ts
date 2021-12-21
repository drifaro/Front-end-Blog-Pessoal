import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Tema } from '../model/Tema';


@Injectable({
  providedIn: 'root'
})
export class TemaService {

  constructor(
    private http: HttpClient
  ) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  getAllTema(): Observable<Tema[]>{
    return this.http.get<Tema[]>('https://driblog.herokuapp.com/tema', this.token)
  }

  getByIdTema(idTema: number): Observable<Tema>{
    return this.http.get<Tema>(`https://driblog.herokuapp.com/tema/${idTema}`, this.token)
  }

  getByDescricaoTema(descricao: string): Observable<Tema[]>{
    return this.http.get<Tema[]>(`https://driblog.herokuapp.com/tema/descricao/${descricao}`, this.token)
  }

  postTema(tema: Tema): Observable<Tema>{
    return this.http.post<Tema>('https://driblog.herokuapp.com/tema', tema, this.token)
  }

  putTema(tema: Tema): Observable<Tema>{
    return this.http.put<Tema>('https://driblog.herokuapp.com/tema', tema, this.token)
  }

  deleteTema(idTema: number) {
    return this.http.delete(`https://driblog.herokuapp.com/tema/${idTema}`, this.token)
  }

}
