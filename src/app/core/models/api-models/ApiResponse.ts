export interface ApiResponse <T>  extends IPagination{
  data?: T;

}

export interface IPagination {
  currentPage: any;
  itemsPerPage: number;
  totalPages: number;
  totalCount: number;
  hasPreviousPage?: boolean;
  hasNextPage?: boolean;
}
