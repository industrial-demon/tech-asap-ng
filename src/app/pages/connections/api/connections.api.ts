import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PaginationDto } from '~/api/generated/connections';

const url = 'http://localhost:8020/api/connections';

@Injectable({ providedIn: 'root' })
export class ConnectionsApi {
  constructor(private readonly httpClient: HttpClient) {}

  getAll({
    page,
    perPage,
  }: {
    page: number;
    perPage: number;
  }): Observable<PaginationDto> {
    const baseParams = new HttpParams()
      .set('page', page)
      .set('perPage', perPage);

    console.log(baseParams.toString());
    return this.httpClient.get<PaginationDto>(url, {
      params: baseParams,
    });
  }
}
