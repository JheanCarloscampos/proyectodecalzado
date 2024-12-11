import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  private carrito: any[] = [];
  private localStorageKey = 'carrito';

  constructor() {
    // Cargar el carrito desde el localStorage
    const carritoGuardado = localStorage.getItem(this.localStorageKey);
    if (carritoGuardado) {
      this.carrito = JSON.parse(carritoGuardado);
    }
  }

  // Obtener el carrito
  getCarrito() {
    return this.carrito;
  }

  // Añadir producto al carrito
  agregarProducto(producto: any) {
    this.carrito.push(producto);
    this.actualizarLocalStorage();
  }

  // Vaciar el carrito
  vaciarCarrito() {
    this.carrito = [];
    localStorage.removeItem(this.localStorageKey);
    localStorage.clear()
    this.actualizarLocalStorage();
    
  }

  // Actualizar el carrito en el localStorage
  private actualizarLocalStorage() {
    console.log('Actualizando localStorage:', this.carrito);
    localStorage.setItem(this.localStorageKey, JSON.stringify(this.carrito));
  }
}
