import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LanguageComponent } from './language/language.component'; // Importiere die neue Komponente
import { WorldMapComponent } from './world-map/world-map.component';

const routes: Routes = [
  { path: 'language', component: LanguageComponent },
  { path: 'world-map', component: WorldMapComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
