import { createFeature, createReducer, on } from '@ngrx/store';
import {
  TABEL_CURRENT_PAGE,
  TABEL_PAGE_INDEX,
  TABEL_PAGE_SIZE,
  TABEL_PAGE_TOTAL_COUNT,
  TABEL_TOTAL_PAGE,
} from '../../constances/variable.const';
import { productActions } from './products.actions';
import { IProductDetails } from '../../models/api-models/IProduct.interface';
import { ApiResponse } from '../../models/api-models/ApiResponse';
export interface IProductState extends ApiResponse<IProductDetails[]> {
  data: IProductDetails[];
  currentPage: number;
  totalPages: number;
  totalCount: number;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
  itemsPerPage: number;
}
const initState: IProductState = {
  data: [],
  currentPage: TABEL_CURRENT_PAGE,
  totalPages: TABEL_TOTAL_PAGE,
  totalCount: TABEL_PAGE_TOTAL_COUNT,
  itemsPerPage: TABEL_PAGE_SIZE,
  hasPreviousPage: false,
  hasNextPage: false,
};

export const productsFeature = createFeature({
  name: 'products_feature',
  reducer: createReducer(
    initState,
    on(productActions.changePageIndex, (state, { pageIndex }) => ({
      ...state,
      loading: true,
      data: { ...state.data },
      currentIndex: pageIndex,
    })),
    on(productActions.changeCurrentPage, (state, { CurrentPage }) => ({
      ...state,
      loading: true,
      data: { ...state.data },
      currentPage: CurrentPage,
    })),
    on(productActions.changeItemsPerPage, (state, { ItemsPerPage }) => ({
      ...state,
      loading: true,
      data: { ...state.data },
      itemsPerPage: ItemsPerPage,
    })),
    on(productActions.getProducts, (state, { data }) => ({
      ...state,
      loading: true,
    })),
    on(productActions.getProductsSuccess, (state, { data }) => ({
      ...state,
      data: data,
      currentPage: data.currentPage,
      totalPages: data.totalPages,
      totalCount: data.totalCount,
      itemsPerPage: data.itemsPerPage,
      loading: false,
    })),
    on(productActions.getProductsFailure, (state, { errors }) => ({
      ...state,
      loading: false,
      errors,
    })),

    on(productActions.addProduct, (state, { createProduct }) => ({
      ...state,
      loading: true,
    })),
    on(productActions.addProductSuccess, (state, { createProduct }) => ({
      ...state,
      loading: false,
      ...state.data,
      // data: [ ...state.data, createProduct ],
    })),
    on(productActions.addProductFailure, (state, { errors }) => ({
      ...state,
      loading: false,
      errors: errors,
    })),
    on(productActions.updateProduct, (state) => ({
      ...state,
      loading: true,
    })),
    on(productActions.updateProductSuccess, (state, updateProduct) => ({
      ...state,
      loading: false,
      ...state.data,

      // data:{...data, [...state.data,updateProduct.updateProduct  ]},
    })),
    on(productActions.updateProductFailure, (state, errors) => ({
      ...state,
      loading: false,
      data: {
        ...state.data,
      },
      errors: errors,
    })),
    on(productActions.deleteProduct, (state) => ({
      ...state,
      loading: true,
    })),
    on(productActions.deleteProductSuccess, (state, { id }) => ({
      ...state,
      loading: false,
      data: state.data.filter((product) => product.id !== id),
        })),
    
    on(productActions.deleteProductFailure, (state) => ({
      ...state,
      loading: false,
    })),

    on(productActions.getProductDetails, (state) => ({
      ...state,
      loading: true,
    })),
    on(
      productActions.getProductDetailsSuccess,
      (state, { ProductDetails }) => ({
        ...state,
        loading: false,
        ...ProductDetails,
      })
    ),
    on(productActions.getProductDetailsFailed, (state, { errors }) => ({
      ...state,
      loading: false,
      errors,
    }))
  ),
});

export const {
  selectHasNextPage,
  selectHasPreviousPage,
  selectCurrentPage,
  selectTotalCount,
  selectTotalPages,
  selectItemsPerPage,
  name,
  reducer,
  selectData,
  selectProducts_featureState,
} = productsFeature;
