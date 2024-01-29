import { Injectable, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface Filters {
  page: number;
  perPage: number;
}

const initPagination: Filters = {
  page: 1,
  perPage: 2,
};

@Injectable({providedIn: 'root'})
export class PaginationService {
  pagination$ = new BehaviorSubject<Filters>(initPagination);

  public setPage(page: number) {
    this.pagination$.next({ ...this.pagination$.value, page });
  }

  public setPerPage(perPage: number) {
    this.pagination$.next({ ...this.pagination$.value, perPage });
  }

  clear(){
    this.pagination$.next(initPagination)
  }
}
