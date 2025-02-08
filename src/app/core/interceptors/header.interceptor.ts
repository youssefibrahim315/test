import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { StorageService } from '../api-services/storage.service';
import { Observable } from 'rxjs';
import { Keys } from '../constances/keys.const';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {
  private readonly storage = inject(StorageService);
  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {

    const req = request.clone({
      setHeaders: {
        Authorization: JSON.parse(this.storage.getLocal(Keys.Token)!) 
      },
    });

    return next.handle(req)
  }
}
