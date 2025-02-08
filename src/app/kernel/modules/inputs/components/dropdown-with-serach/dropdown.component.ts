import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, FormControl, NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { KendoAngularModule } from '../../kendoAngular.module';

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [
    CommonModule,KendoAngularModule
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: DropdownComponent,
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: DropdownComponent,
    },
  ],
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
})
export class DropdownComponent implements OnChanges, ControlValueAccessor {
  @Input() data: any;
  @Input() formControlName = new FormControl('');
  @Input() placeholder = 'select';
  @Input() appearance: any = 'outline';
  @Input() withImage = false;
  @Input() showSearch = true;
  @Output() selectedValue = new EventEmitter();
  @Output() onchange = new EventEmitter();
  textValue: string = '';
  @Input() activeLengthChar: number = 3;
  @Input()showNoData:boolean=false;

  ngOnChanges() {  
  }
  writeValue(value: string | number | any) {
    if (value) {
      this.formControlName.setValue(value);
    } else {
      this.formControlName.reset('');
    }
  }

  registerOnChange(fn: (value: string | null) => void) {
  }

  registerOnTouched(onTouched: any) {
    
  }
  onSelected(option: any) {
    this.selectedValue.emit(option);
  }
  

}
