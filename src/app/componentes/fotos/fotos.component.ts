import { Component, OnInit } from '@angular/core';

import { Produto } from 'src/app/model/produto';

@Component({
  selector: 'app-fotos',
  templateUrl: './fotos.component.html',
  styleUrls: ['./fotos.component.scss']
})
export class FotosComponent implements OnInit {

  fotos: Produto[] = [
    {titulo: 'Cesta de Frutas', caminho: "../assets/frutas.jpg", descricao: 'Uma cesta repleta de frutas', preco: 24.44},
    {titulo: 'Outra Cesta de Frutas', caminho: "../assets/popa.png", descricao: 'Mais uma cesta repleta de frutas', preco: 34.44}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

