import { Component, forwardRef, Input } from '@angular/core';
import { AbstractControl, ControlValueAccessor, FormControl, FormsModule, NG_VALIDATORS, NG_VALUE_ACCESSOR, ReactiveFormsModule, ValidationErrors, Validator } from '@angular/forms';
import { HttpService } from '../../../../../core/services/http.service';
import { CommonModule } from '@angular/common';
import { KendoAngularModule } from '../../kendoAngular.module';
@Component({
  selector: 'app-selectbox',
  templateUrl: './selectbox.component.html',
  styleUrls: ['./selectbox.component.scss'],
  standalone: true,
  imports: [CommonModule,KendoAngularModule, FormsModule,ReactiveFormsModule],
  providers: [

    {
      provide: NG_VALUE_ACCESSOR,
      useExisting:SelectboxComponent,
      multi: true

    },
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: SelectboxComponent,
    },
  ],
})
export class SelectboxComponent implements ControlValueAccessor, Validator {

  @Input() name: string="";
  @Input() data: any[]=[];
  @Input() url: string="";
  @Input() placeholder: string='';
  @Input() multiple: boolean=false ;
  @Input() label: string="";
  @Input() val: string="";

  private innerValue: any;
  inputControl = new FormControl('', {
    nonNullable: true,
  });
  private onTouched: (() => void) | any;
  constructor(private http: HttpService) {

   }
  validate(control: AbstractControl): ValidationErrors | null {
    setTimeout(() => this.inputControl.setErrors(control.errors));
    return null;
  }
  registerOnValidatorChange?(fn: () => void): void {
    // throw new Error('Method not implemented.');
  }
  ngOnInit(): void {
    this.url ? this.http.get(this.url).subscribe((res) => {
      this.data = res.data.items
    }) : ''

  }
  get value(): any {
    return this.innerValue;
  }

  set value(val: any) {
    this.innerValue = val;
        this.onTouched();
  }

  writeValue(value: string | number | any) {
    if (value) {
      this.inputControl.setValue(value);
    } else {
      this.inputControl.reset('');
    }
  }

  registerOnChange(fn: (value: string | null) => void) {
    this.inputControl.valueChanges.subscribe((res) => {
      fn(res);
    });
    this.onChanged = fn

  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    // You can handle the disabled state if needed
  }

  onChanged(value: any) {
    this.innerValue = value;
  }

  selectItem(value: any) {
    this.value = value;
  }
  onSelectionChange(event: any): void {
    this.value = event;
  }
  onBlur(): void {
    this.onTouched();
  }
}
