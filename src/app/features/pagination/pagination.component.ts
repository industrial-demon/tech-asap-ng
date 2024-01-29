import { NgClass, NgFor } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  booleanAttribute,
} from '@angular/core';

const PAGINATION_ITEMS = 5;

@Component({
  selector: 'ns-pagination',
  standalone: true,
  imports: [NgFor, NgClass],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css',
})
export class PaginationComponent implements OnChanges {
  rangeFirstIdx = 0;
  rangeLastIdx = PAGINATION_ITEMS;
  canNext = true;
  canPrevious = false;

  @Input({ required: true }) currentPage!: number;
  @Input({ required: true }) lastPage!: number;
  @Input({ transform: booleanAttribute }) next!: boolean;
  @Input({ transform: booleanAttribute }) prev!: boolean;

  @Output() changedPage = new EventEmitter();

  onPageClick(page: number) {
    this.changedPage.emit(page);
  }

  onPrevClick() {
    if (this.rangeFirstIdx - PAGINATION_ITEMS < 0) {
      this.canPrevious = false;
    }

    if (this.canPrevious) {
      this.canNext = true;
      this.rangeFirstIdx = this.rangeFirstIdx - PAGINATION_ITEMS;
      this.rangeLastIdx = this.rangeFirstIdx + PAGINATION_ITEMS;
      this.changedPage.emit(this.rangeLastIdx);
    }
  }

  onNextClick() {
    const lastIndex = this.rangeLastIdx + PAGINATION_ITEMS;
    if (this.canNext) {
      this.canPrevious = true;

      if (lastIndex >= this.lastPage) {
        this.rangeLastIdx = this.lastPage;
        this.rangeFirstIdx = this.rangeLastIdx - PAGINATION_ITEMS;
        this.canNext = false;
      } else {
        this.rangeLastIdx = lastIndex;
        this.rangeFirstIdx = this.rangeFirstIdx + PAGINATION_ITEMS;
      }

      console.log(this.rangeFirstIdx, this.rangeLastIdx);
      this.changedPage.emit(this.rangeFirstIdx + 1);
    }
  }

  getActivePage(page: number) {
    return this.currentPage === page;
  }

  get items() {
    return Array.from({ length: this.lastPage }, (_, idx) => idx + 1).slice(
      this.rangeFirstIdx,
      this.rangeLastIdx
    );
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
}
