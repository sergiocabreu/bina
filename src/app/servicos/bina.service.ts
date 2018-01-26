import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';



@Injectable()
export class BinaService {
  
  servidor = 'http://svtcedevap3.tce.ce.gov.br:8880';

  constructor(public http: Http) { }


  public listarContatos() : Observable<any> {
    
    let url =  this.servidor + '/BinaWS/rest/bina/usuarios';

    let options = new RequestOptions({ headers: new Headers({ 'Content-Type': 'application/json' }) });

    return this.http.get(url)
                    .map(res => res.json())
                    .catch( err => Observable.throw(err.messasge) );
   }



   
   public chamar(ip: string, nome: string, mensagem: string)  {

    let url = this.servidor + '/BinaWS/rest/bina/send';

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });

    let parametros = { nome: nome, ip : ip, msg : mensagem};

    this.http.post(url, parametros, options).subscribe(res => console.log(res));
   }

   private handleError(error: any) {
    let errMsg =
      (error.message) ? error.message :
        (error.name == "TimeoutError") ? "Não foi possível acessar o servidor" :
          //error.status ? error.json().mensagem : "Erro desconhecido";
          error.status ? JSON.parse(error._body) : "Erro desconhecido";

    console.log(errMsg);

    return Observable.throw(errMsg);
  }

}

