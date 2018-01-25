import { Component, OnInit } from '@angular/core';

import {MessageService} from 'primeng/components/common/messageservice';
import {Message} from 'primeng/components/common/api';

@Component({
  selector: 'contatos',
  templateUrl: './contatos.component.html',
  styleUrls: ['./contatos.component.css'],
  providers: [MessageService]
})
export class ContatosComponent implements OnInit {

  //msgs: Message[] = [];

  usuarios = [
    { id: 11, name: 'Mr. Nice' },
    { id: 12, name: 'Narco' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' }
  ];

  constructor(private messageService: MessageService) { }

  ngOnInit() {
  }

  public chamar(nome: string) {
    this.messageService.add({severity:'success', summary: 'Chamando ' + nome + '...'});
  }
}