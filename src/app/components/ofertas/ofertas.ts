import { Component, signal } from '@angular/core';
import { Producto } from '../../interfaces/producto';

@Component({
  selector: 'app-ofertas',
  imports: [],
  templateUrl: './ofertas.html',
  styleUrl: './ofertas.css'
})
export class Ofertas {
  ofertas = signal<Producto[]>([
    { id: 5, nombre: 'Tablet 10"', precio: 699, icono: '📲' },
    { id: 6, nombre: 'Teclado Mecánico', precio: 149, icono: '⌨️' },
    { id: 7, nombre: 'Parlante Portátil', precio: 119, icono: '🔊' }
  ]);
}
