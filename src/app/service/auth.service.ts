import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { UserLogin } from '../model/UserLogin';
import { Usuario } from '../model/Usuario';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  constructor(
    private http: HttpClient
  ) { }

  entrar(UserLogin: UserLogin): Observable<UserLogin>{
    return this.http.post<UserLogin>('https://driblog.herokuapp.com/usuarios/logar', UserLogin) 
  }

  cadastrar(user: Usuario): Observable<Usuario>{
    return this.http.post<Usuario>('https://driblog.herokuapp.com/usuarios/cadastrar', user)

  }

  getByIdUsuario(idUsuario: number): Observable<Usuario>{
    return this.http.get<Usuario>(`https://driblog.herokuapp.com/usuarios/${idUsuario}`)
  }

  putUsuario(user: Usuario): Observable<Usuario> {
    return this.http.put<Usuario>('https://driblog.herokuapp.com/usuarios/atualizar', user)
  }

  logado(){
    let ok = false

    if(environment.token != ''){
      ok = true
    }
        
    return ok
  }

  adm(){
    let ok = false

    if(environment.tipo == 'adm'){
      ok = true
    }
    return ok
  }

}

