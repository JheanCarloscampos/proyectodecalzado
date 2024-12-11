import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CarritoService } from '../../service/carrito.service';




@Component({
  selector: 'app-adidas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './adidas.component.html',
  styleUrl: './adidas.component.sass'
})
export class AdidasComponent {
  adidas = [
    {
      modelo: 'Modelo 1',
      precio: 200000,  
      imagen: 'adidas.png'
    },
    {
      modelo: 'Modelo 2',
      precio: 140000,
      imagen: 'adidas2.png'
    },
    {
      modelo: 'Modelo 3',
      precio: 239000,
      imagen: 'adidas3.png'
    },
    {
      modelo: 'Modelo 4',
      precio: 200000,
      imagen: 'adidas4.png'
    },
    {
      modelo: 'Modelo 5',
      precio: 120000,
      imagen: 'adidas5.png'
    },
    {
      modelo: 'Modelo 6',
      precio: 239000,
      imagen: 'adidas6.png'
    },
    {
      modelo: 'Modelo 7',
      precio: 200000,
      imagen: 'adidas7.png'
    },
    {
      modelo: 'Modelo 8',
      precio: 120000,
      imagen: 'adidas8.png'
    },
    {
      modelo: 'Modelo 9',
      precio: 239000,
      imagen: 'adidas9.png'
    }
  ];

  constructor(private carritoService: CarritoService){}

  agregarAlCarrito(producto: any) {
    this.carritoService.agregarProducto(producto);
    alert('ha sido añadido al carrito');
  }
}
