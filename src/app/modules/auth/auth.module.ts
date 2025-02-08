import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputsModule } from '../../kernel/modules/inputs/inputs.module';
import { InputTextComponent } from '../../kernel/modules/inputs/components/input-text/input-text.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth.routing.module';

@NgModule({
  declarations: [ ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    InputsModule,
    InputTextComponent,
  ],
})
export class AuthModule {}
