import { Component } from '@angular/core';

@Component({
  selector: 'app-resenas',
  imports: [],
  templateUrl: './resenas.html',
  styleUrl: './resenas.css'
})
export class Resenas {
  resenas = [
    { autor: 'María P.', texto: 'Excelente atención y rápida entrega.', estrellas: '⭐⭐⭐⭐⭐' },
    { autor: 'Luis R.', texto: 'Buenos precios y productos originales.', estrellas: '⭐⭐⭐⭐' },
    { autor: 'Ana G.', texto: 'Muy recomendable, volveré a comprar.', estrellas: '⭐⭐⭐⭐⭐' }
  ];
}
