import { Component, OnInit } from '@angular/core';
import {ViewEncapsulation} from '@angular/core';


import { MessageService } from 'primeng/components/common/messageservice';
import { Message } from 'primeng/components/common/api';

import { BinaService } from './../servicos/bina.service'
import { Observable } from 'rxjs/Observable';
import { error } from 'selenium-webdriver';

@Component({
  selector: 'contatos',
  templateUrl: './contatos.component.html',
  styleUrls: ['./contatos.component.css'],
  providers: [MessageService],
  encapsulation: ViewEncapsulation.None
})
export class ContatosComponent implements OnInit {

  users: any;
  texto: string;

  constructor(private messageService: MessageService,
              private binaService: BinaService
  ) { }

  ngOnInit() {
    this.binaService.listarContatos().subscribe(data => {
      this.users = data.usuario;
    }), error => {
      console.log('teste' + error);
    };
  }

  public chamar(ip: string, nome: string) {
    let msg;
    if (this.texto) {
      msg = this.texto;
    } else {
      msg = 'Atende ai!!!!';
    }
    this.binaService.chamar(ip, nome, msg);
    
    this.messageService.add({severity:'success', summary: nome, detail: msg});
  }

  public limpar() {
    this.texto = '';
  }
}