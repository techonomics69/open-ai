import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { DocumentationComponent } from './documentation/documentation.component';
import { SettingsComponent } from './settings/settings.component';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';


@NgModule({
  declarations: [
    HomeComponent,
    DocumentationComponent,
    SettingsComponent
  ],
  imports: [
    CommonModule,
    InputTextareaModule,
    FormsModule,
    ButtonModule
  ]
})
export class FeaturesModule { }
