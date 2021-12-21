import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserLogin } from '../model/UserLogin';
import { Usuario } from '../model/Usuario';
import { AlertasService } from '../service/alertas.service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  usuario:  Usuario = new Usuario
  confirmarSenha: string
  tipo: string


  constructor( 
    public authService: AuthService,
    private router: Router,
    private alerta: AlertasService
    ) { }

  ngOnInit() {
    window.scroll(0,0)

  }

  confirmSenha(event: any) {
    this.confirmarSenha = event.target.value
  }

  tipUser(event: any){
    this.tipo = event.target.value
  }

  cadastrar(){
    this.usuario.tipo = this.tipo
    
    if(this.usuario.senha != this.confirmarSenha) {
      this.alerta.showAlertDanger('As senhas estão diferentes.')

    } else{
      this.authService.cadastrar(this.usuario).subscribe((resp: Usuario) => {
        this.usuario = resp 
        this.router.navigate(['/entrar'])
        this.alerta.showAlertSuccess('Usuário cadastrado com sucesso!')

      }, erro => {
        if (erro.status != 201){
          this.alerta.showAlertDanger('Usuário já está cadastrado, tente com um novo usuário!')
        }
      })
    }

  }

}
