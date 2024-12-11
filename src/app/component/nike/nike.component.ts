import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CarritoService } from '../../service/carrito.service';


@Component({
  selector: 'app-nike',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nike.component.html',
  styleUrl: './nike.component.sass'
})
export class NikeComponent {
  nike = [
    {
      modelo: 'Modelo 1',
      precio: 200000,
      imagen: 'nike.png'
    },
    {
      modelo: 'Modelo 2',
      precio: 140000,
      imagen: 'nike2.png'
    },
    {
      modelo: 'Modelo 3',
      precio: 239000,
      imagen: 'nike3.png'
    },
    {
      modelo: 'Modelo 4',
      precio: 200000,
      imagen: 'nike4.png'
    },
    {
      modelo: 'Modelo 5',
      precio: 120000,
      imagen: 'nike5.png'
    },
    {
      modelo: 'Modelo 6',
      precio: 239000,
      imagen: 'nike6.png'
    },
    {
      modelo: 'Modelo 7',
      precio: 200000,
      imagen: 'nike7.png'
    },
    {
      modelo: 'Modelo 8',
      precio: 120000,
      imagen: 'nike8.png'
    },
    {
      modelo: 'Modelo 9',
      precio: 239000,
      imagen: 'nike9.png'
    }
  ];

  constructor(private carritoService: CarritoService){}

  agregarAlCarrito(producto: any) {
    this.carritoService.agregarProducto(producto);
    alert('ha sido añadido al carrito');
  }
}
