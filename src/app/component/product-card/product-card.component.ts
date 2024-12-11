import { CommonModule } from '@angular/common'
import { Component, Input } from '@angular/core'
import { AdidasComponent } from "../adidas/adidas.component";
import { NikeComponent } from "../nike/nike.component";
import { NewBalanceComponent } from "../new-balance/new-balance.component";

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule, AdidasComponent, NikeComponent, NewBalanceComponent],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.sass'
})
export class ProductCardComponent {
 

}
