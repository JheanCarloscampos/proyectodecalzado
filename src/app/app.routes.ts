import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductCardComponent } from './component/product-card/product-card.component';
import { GaleriaComponent } from './component/galeria/galeria.component';

export const routes: Routes = [
    {path : 'header' , component: HeaderComponent},
    {path : 'inicio' , component: InicioComponent},
    {path : 'footer' , component: FooterComponent},
    {path : 'product-card', component:ProductCardComponent},
    {path : 'galeria' , component: GaleriaComponent},


]
