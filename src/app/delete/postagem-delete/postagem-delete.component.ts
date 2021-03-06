import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Postagem } from 'src/app/model/Postagem';
import { AlertasService } from 'src/app/service/alertas.service';
import { PostagemService } from 'src/app/service/postagem.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-postagem-delete',
  templateUrl: './postagem-delete.component.html',
  styleUrls: ['./postagem-delete.component.css']
})
export class PostagemDeleteComponent implements OnInit {

  postagem: Postagem = new Postagem()
  listaPostagens: Postagem[]
  idPost: number

  constructor(
    private postagemService: PostagemService,
    private router: Router,
    private route: ActivatedRoute,
    private alerta: AlertasService
  ) { }

  ngOnInit(){
    if(environment.token == ''){
      this.router.navigate(['/entrar'])
    }

    this.idPost = this.route.snapshot.params['idPost']
    this.findByIdPostagem(this.idPost)
  }

  findByIdPostagem(idPost: number){
    this.postagemService.getByIdPostagem(idPost).subscribe((resp: Postagem) => {
      this.postagem = resp
    })
    }

    apagar(){
      this.postagemService.deletePostagem(this.idPost).subscribe(() => {
        this.alerta.showAlertSuccess('Postagem apagada com sucesso!')
        this.router.navigate(['/tema'])
      })
    }

}
