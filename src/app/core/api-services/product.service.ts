import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../services/http.service';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  http = inject(HttpService);
  
  create(createProduct: any): Observable<any> {
    return this.http.post('http://localhost:3000/products', createProduct);
  }

  get(params: { currentPage: number; itemsPerPage: number }): Observable<any> {
    return this.http.getWithParam('http://localhost:3000/products', params);
  }
  update(updateProduct: any, param: any): Observable<any> {
    return this.http.update('http://localhost:3000/products', updateProduct, param);
  }

  delete(param: any): Observable<any> {
    return this.http.delete('http://localhost:3000/products', param);
  }
  details(params: any): Observable<any> {
    return this.http.getWithParam('http://localhost:3000/products', params);
  }

}
