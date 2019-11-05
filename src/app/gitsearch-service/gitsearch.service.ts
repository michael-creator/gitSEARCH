import { User} from '../user';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GitsearchService {

  user:User;
  
  constructor(private http:HttpClient) 
  { this.user= new User("Test name","Test avatar", "Test created", "Test updated"); }

  getUser(username:string){
      let url = "https://api.github.com/users/"+username+"?access_token="+environment.github_api  
      ;

      let promise = new Promise(
        (resolve,reject)=>{

          this.http.get(url).toPromise().then(
            (results)=>{ 
              
              this.user=new User(
              results["login"],
              results["avatar_url"],
              results["created_at"],
              results["updated_at"]
            );   

            resolve();
          
          },
            (error)=>{
              this.user = new User("Error","Error","Error","Error");
              reject();

           }
          )

        }
      );

    return promise;
  }
}
