import { createSelector } from '@ngrx/store';

import {
  IProductState,
  selectCurrentPage,
  selectData,
  selectHasNextPage,
  selectHasPreviousPage,
  selectItemsPerPage,
  
  selectTotalCount,
  selectTotalPages,
} from './products.reducers';


export const selectPaginationInfo = createSelector(
  selectCurrentPage,
  selectItemsPerPage,
  (currentPage,itemsPerPage) => ({
    currentPage,
    itemsPerPage  })
);

export const selectProducts = createSelector(
  selectData,
  selectCurrentPage,
  selectTotalCount,
  selectTotalPages,
  selectItemsPerPage,
  selectHasNextPage,
  selectHasPreviousPage,
  (data, currentPage, totalCount, totalPages, itemsPerPage, hasNextPage, hasPreviousPage) => ({
    data,
    currentPage,
    totalCount,
    totalPages,
    itemsPerPage,
    hasNextPage,
    hasPreviousPage
    
  })
);
