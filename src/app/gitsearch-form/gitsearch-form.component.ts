import { Component, OnInit, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-gitsearch-form',
  templateUrl: './gitsearch-form.component.html',
  styleUrls: ['./gitsearch-form.component.css']
})
export class GitsearchFormComponent implements OnInit {
  @Output() emitSearch = new EventEmitter<string>();


  searchTerm:string;
  constructor() { }
  search(){
    
    this.emitSearch.emit(this.searchTerm);
  }
  ngOnInit() {
  }

}
