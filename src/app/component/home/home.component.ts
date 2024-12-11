import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { GaleriaComponent } from '../galeria/galeria.component';
import { ProductCardComponent } from '../product-card/product-card.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [GaleriaComponent, ProductCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.sass'
})
export class HomeComponent {

}
