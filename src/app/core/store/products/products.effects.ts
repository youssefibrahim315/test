import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  catchError,
  exhaustMap,
  map,
  mergeMap,
  of,
  switchMap,
  tap,
  withLatestFrom,
} from 'rxjs';
import { Store } from '@ngrx/store';
import { ProductService } from '../../api-services/product.service';
import { productActions } from './products.actions';
import { selectPaginationInfo } from './products.selectors';

@Injectable({ providedIn: 'root' })
export class ProductEffectService {
  productService = inject(ProductService);

  actions$ = inject(Actions);
  private readonly store = inject(Store);

  getProductsEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(
        productActions.changeCurrentPage,
        productActions.changeItemsPerPage,

        productActions.getProducts,
        productActions.addProductSuccess,
        productActions.updateProductSuccess,
        productActions.deleteProductSuccess
      ),
      withLatestFrom(this.store.select(selectPaginationInfo)),
      exhaustMap(([action, PaginationInfo]) => {
        const { currentPage,itemsPerPage } = PaginationInfo;
        let params = { currentPage,itemsPerPage };

        return this.productService.get(params).pipe(
          map((res: any) =>{
            console.log("🚀 ~ ProductEffectService ~ map ~ res:", res)
            
            return productActions.getProductsSuccess(res)}),
          tap((res) => {
            console.log("🚀 ~ ProductEffectService ~ tap ~ res:", res)
          }),

          catchError((errors: string[]) =>
            of(productActions.getProductsFailure(errors))
          )
        );
      })
    )
  );

  createProductEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(productActions.addProduct),
      exhaustMap(({ createProduct }) =>
        this.productService.create(createProduct).pipe(
          map(() => productActions.addProductSuccess(createProduct)),
          catchError((errors: string[]) =>
            of(productActions.addProductFailure(errors))
          )
        )
      ),
      catchError((errors: string[]) =>
        of(productActions.addProductFailure(errors))
      )
    )
  );

  updateProductEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(productActions.updateProduct),
      mergeMap(({ updateProduct, param }) =>
        this.productService.update(updateProduct, param).pipe(
          map((res: any) => {
            console.log('🚀 ~ ProductEffectService ~ map ~ res:', res);
            console.log(
              '🚀 ~ ProductEffectService ~ updateProduct:',
              updateProduct
            );
            if (res.proccess) {
            } else {
            }

            return productActions.updateProductSuccess(updateProduct);
          }),
          catchError((errors: string[]) =>
            of(productActions.updateProductFailure(errors))
          )
        )
      )
    )
  );

  deleteProductEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(productActions.deleteProduct),
      // exhaustMap((param) =>
        // this.alert.confirm('Do you really want to delete this record?').pipe(
        //   switchMap((action: any) => {
        //     console.log('🚀 ~ ProductEffectService ~ switchMap ~ res:', action);
        //     console.log('🚀 ~ ProductEffectService ~ switchMap ~ res:', param);

        //     if (action.isConfirmed) {
        //       return this.productService.delete(param).pipe(
        //         map((res: any) => {
        //           console.log('🚀 ~ ProductEffectService ~ map ~ res:', res);
        //           // show notification
        //           if (res.proccess) {
        //           } else {
        //           }

        //           return productActions.deleteProductSuccess(param.productId);
        //         }),
        //         catchError((errors: string[]) => {
        //           console.log(
        //             '🚀 ~ ProductEffectService ~ catchError ~ errors:',
        //             errors
        //           );

        //           this.alert.alert('ERROR');
        //           return of(productActions.deleteProductFailure(errors));
        //         })
        //       );
        //     } else {
        //       return of();
        //     }
        //   })
        // )
      // )
    )
  );
}
