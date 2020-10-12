import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'Angularflix-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss']
})
export class AutocompleteComponent implements OnInit {

  @Input() data: any;
  @Input() show: boolean;
  @Output() hide = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {}

  search(id) {
    this.hide.emit(id);
  }

}
