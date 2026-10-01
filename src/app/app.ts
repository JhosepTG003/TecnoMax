import { Component } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { Categorias } from './components/categorias/categorias';
import { Productos } from './components/productos/productos';
import { Ofertas } from './components/ofertas/ofertas';
import { Resenas } from './components/resenas/resenas';
import { Nosotros } from './components/nosotros/nosotros';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [Navbar, Categorias, Productos, Ofertas, Resenas, Nosotros, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}