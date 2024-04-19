import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css',
})
export class SearchBarComponent implements OnInit {
  term = '';
  @Output() submitted = new EventEmitter<string>();

  constructor() {}

  onInput(event: Event) {
    this.term = (event.target as HTMLInputElement)?.value || '';
  }

  onClear() {
    this.term = '';
  }

  onFormSubmit(event: Event) {
    event.preventDefault();
    this.submitted.emit(this.term);
  }

  ngOnInit(): void {}
}
