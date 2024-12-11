import { Component, OnInit } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { HeaderComponent } from './header/header.component'
import { FooterComponent } from './footer/footer.component'
import { GaleriaComponent } from "./component/galeria/galeria.component"
import { ProductCardComponent } from './component/product-card/product-card.component'
import { HttpClient } from '@angular/common/http'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, CommonModule, FooterComponent],
  providers: [ HttpClient,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent  {
  title = 'tiendadecalzado'


}
