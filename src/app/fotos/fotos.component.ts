import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fotos',
  templateUrl: './fotos.component.html',
  styleUrls: ['./fotos.component.scss']
})
export class FotosComponent implements OnInit {

  fotos = [
    {titulo: 'Cesta de Frutas', path: "../assets/frutas.jpg", legenda: 'Uma cesta repleta de frutas', preco: '24,44'},
    {titulo: 'Outra Cesta de Frutas', path: "../assets/popa.png", legenda: 'Mais uma cesta repleta de frutas', preco: '34,44'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

