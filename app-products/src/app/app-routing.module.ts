import { NuevoComponent } from './vistas/nuevo/nuevo.component';
import { DashboardComponent } from './vistas/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './vistas/login/login.component'
import { EditarComponent } from './vistas/editar/editar.component';

//Arreglo donde se declaran todas las rutas
const routes: Routes = [
  { path:'', redirectTo:'login', pathMatch:'full'},
  { path:'login', component:LoginComponent},
  { path:'dashboard', component:DashboardComponent},
  { path:'nuevo', component:NuevoComponent},
  { path:'editar/:id', component:EditarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
/* Exportar todas las rutas como buena practica esto se lleva app.mdules.ts */
export const routingComponents= [LoginComponent, DashboardComponent, NuevoComponent, EditarComponent];
