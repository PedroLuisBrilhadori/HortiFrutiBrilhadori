import { Component, OnInit } from '@angular/core';

import { Produto } from 'src/app/model/produto';

@Component({
  selector: 'app-fotos',
  templateUrl: './fotos.component.html',
  styleUrls: ['./fotos.component.scss']
})
export class FotosComponent implements OnInit {

  fotos: Produto[] = [
       {
        titulo: 'Batata Doce ',
        caminho: '../assets/fotos/Batata Doce - 2.50 - Batata doce na redinha -.jpeg',
        preco: 2.5,
        descricao: ' Batata doce na redinha '
      }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

