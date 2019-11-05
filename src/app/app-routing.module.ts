import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { JuegoComponent } from './juego/juego.component';
import { Error404Component } from './error404/error404.component';


const routes: Routes = [
  // { path: '', pathMatch: 'full', redirectTo: '/main' },
  { path: '', pathMatch: 'full', component: MainComponent },
  { path: 'main', component: MainComponent },
  { path: 'juego', component: JuegoComponent },
  { path: 'error', component: Error404Component },
  { path: '**', component: Error404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
