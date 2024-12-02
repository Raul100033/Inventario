import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductoListaComponent } from './producto-lista/producto-lista.component';
import { AgergarProductoComponent } from './agergar-producto/agergar-producto.component';
import { EditarProductoComponent } from './editar-producto/editar-producto.component';

// http:localhost:4200/productos
const routes: Routes = [
  {path:'productos', component: ProductoListaComponent},
  {path:'', redirectTo: 'productos', pathMatch:'full'},
  {path:'agregar-producto', component: AgergarProductoComponent},
  {path: 'editar-producto/:idProducto', component: EditarProductoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
