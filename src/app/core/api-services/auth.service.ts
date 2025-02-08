import { Injectable, inject } from '@angular/core';
import { HttpService } from '../services/http.service';
import { StorageService } from './storage.service';
import { Keys } from '../constances/keys.const';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  http = inject(HttpService);
  private readonly storage = inject(StorageService);

  login(data: any): Observable<any> {
    return this.http.post('http://localhost:3000/users', data);
  }

  get isLoggedIn(): boolean {
    return !!this.storage.getLocal(Keys.Token);
  }
}
