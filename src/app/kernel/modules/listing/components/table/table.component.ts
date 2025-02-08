import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import {
  
  ListViewDataResult,
  PageChangeEvent,
  
} from '@progress/kendo-angular-listview';
import { finalize, Subscription } from 'rxjs';
import { ProductService } from '../../../../../core/api-services/product.service';
import { KendoAngularModule } from '../../../inputs/kendoAngular.module';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule,KendoAngularModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent implements OnInit {
  @Input({ required: true }) data: ListViewDataResult | any;

  public pageSize = 6;
  loading = false;
  public skip = 0;
  params!: { CurrentPage: number; ItemsPerPage: number };
  public get showPager(): boolean | any {
    return this.data && this.data.total > 0;
  }
  private productsSubscription = new Subscription();

  constructor(private productsService: ProductService) {}

  public ngOnInit(): void {
  }

  public fetchData(): void {
    if (this.productsSubscription) {
      this.productsSubscription.unsubscribe();
    }
    this.loading = true;
  }

  public handlePageChange(event: PageChangeEvent): void {
    this.skip = event.skip;
    this.pageSize = event.take;

    this.fetchData();
  }

  public ngOnDestroy(): void {
    if (this.productsSubscription) {
      this.productsSubscription.unsubscribe();
    }
  }
}
