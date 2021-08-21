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
      titulo: 'Manga ',
      caminho: '../assets/fotos/Manga - 4.49 - Manga Palmer preço por Kg -.jpeg',
      preco: 4.49,
      descricao: ' Manga Palmer preço por Kg '
    },
     {
      titulo: 'Abacaxi ',
      caminho: '../assets/fotos/Abacaxi - 6.00 - Abacaxi preço por unidade -.jpeg',
      preco: 6,
      descricao: ' Abacaxi preço por unidade '
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

