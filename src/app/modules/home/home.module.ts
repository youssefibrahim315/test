import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { ButtonComponent } from '../../kernel/modules/inputs/components/button/button.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ButtonComponent,
   
  ],
})
export class HomeModule {}
