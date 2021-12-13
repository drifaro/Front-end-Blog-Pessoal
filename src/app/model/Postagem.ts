import { Tema } from "./Tema";
import { UserLogin } from "./UserLogin";
import { Usuario } from "./Usuario";

export class Postagem{
    public idPost: number;
    public titulo: string;
    public texto: string;
    public data: Date;

    public usuario: Usuario
    public tema: Tema
}