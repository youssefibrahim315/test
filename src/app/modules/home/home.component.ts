import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  inject,
  NO_ERRORS_SCHEMA,
  OnInit,
} from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { ButtonComponent } from '../../kernel/modules/inputs/components/button/button.component';
import { RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { UserService } from '../../core/api-services/user.service';
import {
  IProductState,
  productActions,
  selectProducts,
} from '../../core/store/products';
import { TableComponent } from '../../kernel/modules/listing/components/table/table.component';
import { IPagination } from '../../core/models/api-models/ApiResponse';
import { Observable, tap } from 'rxjs';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { KendoAngularModule } from '../../kernel/modules/inputs/kendoAngular.module';
import { InputTextComponent } from '../../kernel/modules/inputs/components/input-text/input-text.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  standalone: true,
  styleUrls: ['./home.component.scss'],
  imports: [
    CommonModule,
    RouterModule,
    ButtonComponent,
    TableComponent,
    ReactiveFormsModule,
    FormsModule,
    KendoAngularModule,InputTextComponent
  ],
  providers: [DatePipe],
})
export class HomeComponent implements OnInit {
  private fb = inject(FormBuilder);
  readonly store = inject(Store);
  readonly userService = inject(UserService);
  form: FormGroup = this.initForm();

  data$: Observable<IProductState> = this.store.select(selectProducts);
  param: IPagination = {
    currentPage: 1,
    itemsPerPage: 5,
    totalPages: 0,
    totalCount: 0,
  };
  public dialogOpened = false;

  ngOnInit(): void {
    this.getData();
  }

  getData(param?: any) {
    this.store.dispatch(productActions.getProducts(this.param));
  }

  create(height = '800px', width = '700px') {}
  update(item: any, height = '800px', width = '700px') {}

  details(item: any, height = '800px', width = '700px') {}

  onChangePageIndex(index: number) {
    console.log('🚀 ~ HomeComponent ~ onChangePageIndex ~ index:', index);
    this.store.dispatch(productActions.changeCurrentPage(index));
  }

  onChangePageSize(itemsPerPage: number) {
    this.store.dispatch(productActions.changeItemsPerPage(itemsPerPage));
  }
  close(component: string): void {
    this.dialogOpened = false;
  }

  open(component: string): void {
    this.dialogOpened = true;
  }

  action(status: string): void {
    console.log(`Dialog result: ${status}`);
    this.dialogOpened = false;
    if (status) {
      this.store.dispatch(productActions.addProduct(this.form.value));
    }
    this.resetAndClose()
  }

  initForm(): FormGroup {
    return this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.required, Validators.minLength(3)]],
      price: ['', [Validators.required, Validators.minLength(3)]],
    });
  }
  resetAndClose(): void {
    this.form.reset();
  }
}
