import { Subscription, startWith, tap } from 'rxjs';
import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  Output,
} from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  FormControl,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
  ValidationErrors,
  Validator,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { KendoAngularModule } from '../../kendoAngular.module';


@Component({
  selector: 'app-input-number',
  templateUrl: './input-number.component.html',
  styleUrls: ['./input-number.component.scss'],
  standalone: true,
  imports: [CommonModule,KendoAngularModule,
    ReactiveFormsModule,
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: InputNumberComponent,
    },
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: InputNumberComponent,
    },
  ],
})
export class InputNumberComponent implements ControlValueAccessor, Validator, OnDestroy {
  @Input() type: string = 'number';
  @Input() id!: string;
  @Input() placeholder: string = '';
  validate(control: AbstractControl): ValidationErrors | null {
    throw new Error('Method not implemented.');
  }
  registerOnValidatorChange?(fn: () => void): void {
    throw new Error('Method not implemented.');
  }
  writeValue(obj: any): void {
    throw new Error('Method not implemented.');
  }
  registerOnChange(fn: any): void {
    throw new Error('Method not implemented.');
  }
  registerOnTouched(fn: any): void {
    throw new Error('Method not implemented.');
  }
  setDisabledState?(isDisabled: boolean): void {
    throw new Error('Method not implemented.');
  }
  
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }
}

