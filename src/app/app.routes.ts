import { Routes } from '@angular/router';
import { ListadoProductoComponent } from './components/listado-producto/listado-producto.component';
import { CrearProductoComponent } from './components/crear-producto/crear-producto.component';

export const routes: Routes = [
{
    path: '',
    component: ListadoProductoComponent
},
{
    path: 'crear-producto',
    component: CrearProductoComponent
},
{
    path: 'editar-producto/:id',
    component: CrearProductoComponent
},
{
    path: '**',redirectTo: '',pathMatch: 'full'
},
    
];
