import { Gitsearch } from '../user';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GitsearchService {
getGitsearchs(){
  return Gitsearch
}
  constructor() { }
}
