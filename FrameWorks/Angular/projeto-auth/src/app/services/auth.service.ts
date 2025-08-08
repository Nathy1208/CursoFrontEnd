import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, map, Observable, switchMap, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //atributos
  private apiUrl = "http://localhost:3006/usuarios";
  private readonly CHAVE_AUTH = 'usuarioLogado';

  constructor(private router: Router, private http: HttpClient) { }

  // métodos
  //cadastrar o usuário no sistema
  registrar(usuario: any): Observable<any>{
    //verificar se usuário no sistema
    return this.http.get<any[]>(`${this.apiUrl}?email=${usuario.email}`).pipe(
      map(usuarios => {
        //se usuário já existe
        if (usuarios.length>0){
          //lanço um erro para sistema
          throw new Error('Usuário já cadastrado');
        }
        return usuario
      }),
      //caso o usuário não exista
      switchMap(novoUsuario =>
        this.http.post(this.apiUrl,novoUsuario).pipe(
          tap(()=> alert('Registro realizado com sucesso'))
        )
      ),
      //pegar erros de conexão
      catchError(err => {
        alert(`Erro: ${err.message}`);
        throw err;
      })
    );
  }

  //método para logar usuários já registrados
  login(credenciais: any): Observable<boolean> {
    //passar para o banco uma busca com email e senha
    return this.http
      .get<any[]>(
        `${this.apiUrl}?email=${credenciais.email}&senha=${credenciais.senha}`
      )
      .pipe(
        //usuário existe com email e senha cadastrados
        map((usuarios) => {
          //não encontrado 
          if (usuarios.length === 0) {
            return false;
          } else {
            //usuário e sua chave de autenticação => localstorage 
            const usuario = usuarios[0];
            localStorage.setItem(this.CHAVE_AUTH, JSON.stringify(usuario));
            return true; //deu certo, continua
          }
        })
      );
  }
  
//deslogar o user
  logout() {
    //llocal storage 
    localStorage.removeItem(this.CHAVE_AUTH);
    //redireciono para outra página
    this.router.navigate(["/home"]);
  }

  // verificar se usuario já fez autenticação
  //(autorização do acesso)
  estaAutenticado(): boolean{
    //transformando a verificação da String em Booleana
    return !! localStorage.getItem(this.CHAVE_AUTH);
  }

  //pegar os dados do usuário
  getUsuarioAtual(): any{
    // quando eu armazeno no localStorage -> Texto -
    // quando vou pegar as informaç~eos do LocalStorage eu converto para JSON
    return JSON.parse(localStorage.getItem(this.CHAVE_AUTH) || '{}');
  }

}
