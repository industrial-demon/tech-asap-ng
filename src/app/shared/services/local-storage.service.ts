import { Injectable, inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LocalStorageRefService } from './local-storage-ref.service';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  private _localStorage: Storage = inject(LocalStorageRefService).localStorage;
  private _myData$ = new BehaviorSubject<any>(null);
  public myData$ = this._myData$.asObservable();

  constructor() {}

  setInfo(key: string, data: any) {
    const jsonData = JSON.stringify(data);
    this._localStorage.setItem(key, jsonData);
    this._myData$.next(data);
  }

  loadInfo(key: string) {
    const jsonData = this._localStorage.getItem(key);
    if (jsonData !== null)
      try {
        const data = JSON.parse(jsonData);
        this._myData$.next(data);
      } catch (e) {}
  }

  clearInfo(key: string) {
    this._localStorage.removeItem(key);
    this._myData$.next(null);
  }

  clearAllLocalStorage() {
    this._localStorage.clear();
    this._myData$.next(null);
  }
}
