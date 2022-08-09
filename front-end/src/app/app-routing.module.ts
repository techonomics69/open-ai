import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocumentationComponent } from './features/documentation/documentation.component';
import { HomeComponent } from './features/home/home.component';
import { SettingsComponent } from './features/settings/settings.component';
import { AppRoutes } from './models/app-enums';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: AppRoutes.Home, component: HomeComponent},
  {path: AppRoutes.Documentation, component: DocumentationComponent},
  {path: AppRoutes.Settings, component: SettingsComponent},
  {path: '**', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
