import { GitsearchService } from '../gitsearch-service/gitsearch.service';
import { User } from '../user';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-gitsearch',
  templateUrl: './gitsearch.component.html',
  styleUrls: ['./gitsearch.component.css']
})
export class GitsearchComponent implements OnInit {

	user:User;  
  constructor(private gitsearchService: GitsearchService) {
    
  }
	ngOnInit() {
		this.doSearch("torvalds");
	}

	doSearch(search:string){
	this.gitsearchService.getUser(search).then(
		(res)=>{this.user=this.gitsearchService.user;},
		(error)=>{}
	);
		
	}
	
}
		
