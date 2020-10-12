import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ghost-list',
  templateUrl: './ghost-list.component.html',
  styleUrls: ['./ghost-list.component.scss']
})
export class GhostListComponent implements OnInit {

  squares = [1, 2, 3, 4, 5, 7, 8, 9];

  constructor() { }

  ngOnInit() {
  }

}
