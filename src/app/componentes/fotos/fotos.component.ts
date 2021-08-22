import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

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
    },
    {
      titulo: 'manga ',
      caminho: '../assets/fotos/manga - 4.49 - manga -.jpeg',
      preco: 4.49,
      descricao: ' manga '
    }
  ];

  chamanozap(foto: Produto){
    let link: string = `https://api.whatsapp.com/send?phone=5516991848360&text=Ol%C3%A1%2C%20gostaria%20de%20comprar%20${foto.titulo}`;
    window.location.href = link
  }

  async compartilhar() {
    await navigator.clipboard.writeText(document.location.href);
    
    const dialog = this.dialog.open(DialogComponent);

  }

  
  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  
  }
}

@Component({
  selector: 'dialog-component',
  templateUrl: './dialog.html'
})
export class DialogComponent {


}


