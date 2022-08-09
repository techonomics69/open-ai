import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import {TabMenuModule} from 'primeng/tabmenu';

const components = [
  HeaderComponent,
  FooterComponent
];

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    TabMenuModule
  ],
  exports: [...components]
})
export class CoreModule { }
