import { Subscription } from 'rxjs';
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
import { CommonModule, NgIf, TitleCasePipe } from '@angular/common';
import { KendoAngularModule } from '../../kendoAngular.module';


@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TitleCasePipe,
    CommonModule,
    KendoAngularModule
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: InputTextComponent,
    },
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: InputTextComponent,
    },
  ],
})
export class InputTextComponent implements ControlValueAccessor, Validator, OnDestroy {
  @Input() type: string = 'text';
  @Input() id!: string;
  @Input() label!: string;
  @Input() placeholder: string = '';
  @Input() hasPasswordIcon: boolean = false;
  @Input() hint: string = '';
  @Input() isTextArea: boolean = false;
  @Input() rows: number = 3;
  @Input() preventEnglishChars: boolean = false;
  @Input() preventArabicChars: boolean = false;
  @Input() prefixText?:string;
  @Input() readonly: boolean = false;
  @Input() disabled: boolean = false;
  @Input() hideNumberArrows: boolean = false;


  @Output() onChnage = new EventEmitter<any>();
  @Output() keyup = new EventEmitter<any>();

  inputControl = new FormControl('', {
    nonNullable: true,
  });

  onChange: (value: any) => void = () => {};

  onTouched = () => {};

  sub = new Subscription();

  touched = false;

  ngOnInit() {
    
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
      this.onChnage.emit(res);
    });
  }

  registerOnTouched(onTouched: any) {
    this.onTouched = onTouched;
  }

  markAsTouched() {
    if (!this.touched) {
      this.onTouched();
      this.touched = true;
    }
  }

  setDisabledState(disabled: boolean) {
    this.disabled = disabled;
  }

  validate(control: AbstractControl): ValidationErrors | null {
    setTimeout(() => this.inputControl.setErrors(control.errors));
    return null;
  }
  onKeyup(value: any) {
    this.keyup.emit(value)
  };

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}

