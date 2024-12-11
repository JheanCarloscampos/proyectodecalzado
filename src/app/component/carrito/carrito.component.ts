import { Component } from '@angular/core';
import { CarritoService } from '../../service/carrito.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';



@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.sass'
})
export class CarritoComponent {
  carrito: any[] = [];

  constructor(private carritoService: CarritoService,  private router: Router) {
    this.carrito = this.carritoService.getCarrito();
  }

  obtenerTotal() {
    return this.carrito.reduce((total, item) => total + item.precio, 0);
  }

  vaciarCarrito() {
    this.carritoService.vaciarCarrito(); 
    this.carrito = this.carritoService.getCarrito(); 
  }


  comprar() {
    // Aquí puedes agregar la lógica para procesar el pago si es necesario
    this.carritoService.vaciarCarrito(); // Limpia el carrito
    alert('Compra realizada con exito');
    this.carrito = []; // Borra los elementos de la vista

    // Redirige al home
    this.router.navigate(['/home']);
  }
}
