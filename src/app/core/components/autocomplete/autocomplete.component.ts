import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'angularflix-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss']
})
export class AutocompleteComponent {

  @Input() data: any[];
  @Input() show: boolean;
  @Output() hide = new EventEmitter<any>();

  search(id?) {
    this.hide.emit(id);
  }

}
