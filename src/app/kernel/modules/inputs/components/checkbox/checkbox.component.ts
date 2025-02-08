import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { KendoAngularModule } from '../../kendoAngular.module';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  standalone:true,
  imports:[CommonModule,KendoAngularModule]
})
export class CheckboxComponent {

}
