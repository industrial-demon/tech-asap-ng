import { Injectable, inject } from '@angular/core';
import { ConnectionsApi } from '../api/connections.api';
import { PaginationService } from '~/features/pagination/pagination.service';

@Injectable({ providedIn: 'root' })
export class ConnectionService {
  private readonly connectionsApi: ConnectionsApi = inject(ConnectionsApi);
  readonly paginationService: PaginationService = inject(PaginationService);

  constructor() {}

  // getConnections() {
  //   return this.connections;
  // }

  getConnectionById(id: string) {}

  public setPage(page: number) {
    this.paginationService.setPage(page);
  }

  fetchConnectionList(page: number, perPage: number) {
    return this.connectionsApi.getAll({
      page,
      perPage,
    });
  }

  clear() {
    this.paginationService.clear();
  }
}
