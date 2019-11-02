import { GitsearchService } from '../gitsearch-service/gitsearch.service';
import { Gitsearch } from '../user';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-gitsearch',
  templateUrl: './gitsearch.component.html',
  styleUrls: ['./gitsearch.component.css']
})
export class GitsearchComponent implements OnInit {

  gitsearchs:Gitsearch[];
  
  constructor(gitsearchService:GitsearchService) {
    
  }

  ngOnInit() {
  }

}
