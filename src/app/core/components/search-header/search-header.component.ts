import { Component, OnInit } from '@angular/core';

import { HeaderService } from '../../services/header.service';
import { Router } from '@angular/router';

@Component({
  selector: 'search-header',
  templateUrl: './search-header.component.html',
  styleUrls: ['./search-header.component.scss']
})
export class SearchHeaderComponent implements OnInit {

  autoCompleteActive = false;
  autoCompleteResults = [];
  searchText = '';

  constructor(private headerService: HeaderService, private router: Router) {}

  ngOnInit() {}

  getAutoComplete() {
    if (this.searchText === '') {
      this.autoCompleteActive = false;
    } else {
      this.headerService.search(this.searchText)
        .subscribe(response => {
          this.autoCompleteResults = response['items'].map(items => {
            return {id: items.id.videoId, title: items.snippet.title.split('- T')[0].trim()};
          });
          this.autoCompleteActive = true;
        }, error => {
          this.autoCompleteActive = true;
        });
    }
  }

  clearInput() {
    this.searchText = '';
    this.autoCompleteActive = false;
  }

  hideAndSearch(id) {
    this.autoCompleteActive = false;
    if (id) {
      this.redirectTo(`/player/${id}`);
    }
  }

  redirectTo(uri) {
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() =>
    this.router.navigate([uri]));
  }

}
