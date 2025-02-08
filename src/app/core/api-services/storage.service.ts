import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class StorageService {

  setLocal(key: string, value: any) {
    localStorage.setItem(key, value);
  }

  getLocal(key: string) {
    return localStorage.getItem(key);
  }

  removeLocal(key: string) {
    localStorage.removeItem(key);
  }

}
