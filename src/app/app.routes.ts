import { Routes } from '@angular/router'
import { InicioComponent } from './inicio/inicio.component'
import { HeaderComponent } from './header/header.component'
import { FooterComponent } from './footer/footer.component'
import { ProductCardComponent } from './component/product-card/product-card.component'
import { GaleriaComponent } from './component/galeria/galeria.component'
import { AdidasComponent } from './component/adidas/adidas.component'
import { NikeComponent } from './component/nike/nike.component'
import { NewBalanceComponent } from './component/new-balance/new-balance.component'
import { CarritoComponent } from './component/carrito/carrito.component'
import { HomeComponent } from './component/home/home.component'
import { ContactoComponent } from './component/contacto/contacto.component'

export const routes: Routes = [
    {path : 'header' , component: HeaderComponent},
    {path : 'inicio' , component: InicioComponent},
    {path : 'footer' , component: FooterComponent},
    {path : 'product-card', component:ProductCardComponent},
    {path : 'galeria' , component: GaleriaComponent},
    {path: 'adidas' , component: AdidasComponent},
    {path: 'nike' , component: NikeComponent},
    {path: 'new-balance', component: NewBalanceComponent},
    {path: 'carrito', component: CarritoComponent},
    { path: 'home', redirectTo: 'home', pathMatch: 'full' }, // Ruta predeterminada
    { path: 'home', component: HomeComponent },
    {path: 'contacto' , component: ContactoComponent}

]
