import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { Observable, switchMap, tap } from 'rxjs';

import { ConnectionService } from './services/connections.service';
import { PaginationDto } from '~/api/generated/connections';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { PaginationComponent } from '~/features/pagination/pagination.component';

@Component({
  selector: 'connections-page',
  standalone: true,
  imports: [PaginationComponent, NgFor, NgIf, AsyncPipe],
  templateUrl: './connections.component.html',
  styleUrl: './connections.component.css',
})
export class ConnectionsComponent implements OnInit, OnDestroy {
  connectionService: ConnectionService = inject(ConnectionService);
  page!: number;
  perPage!: number;
  data$!: Observable<PaginationDto>;

  ngOnInit(): void {
    this.data$ = this.connectionService.paginationService.pagination$.pipe(
      tap((val) => console.log(val, 'VAL')),
      switchMap((val) => {
        this.page = val.page;
        this.perPage = val.perPage;
        return this.connectionService.fetchConnectionList(
          val.page,
          val.perPage
        );
      }),
      tap((val) => console.log(val, 'VAL'))
    );
  }

  ngOnDestroy(): void {
    this.connectionService.clear();
  }
}
