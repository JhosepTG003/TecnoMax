import { Component, signal } from '@angular/core';
import { Producto } from '../../interfaces/producto';

@Component({
  selector: 'app-productos',
  imports: [],
  templateUrl: './productos.html',
  styleUrl: './productos.css'
})
export class Productos {
  productos = signal<Producto[]>([
    { id: 1, nombre: 'Laptop Pro 15', precio: 3200, icono: '💻' },
    { id: 2, nombre: 'Smartphone X', precio: 1800, icono: '📱' },
    { id: 3, nombre: 'Audífonos BT', precio: 250, icono: '🎧' },
    { id: 4, nombre: 'Mouse Gamer', precio: 90, icono: '🖱️' }
  ]);
}