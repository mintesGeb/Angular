import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

interface ILogin{
  email:string,
  password:string
}

@Injectable({
  providedIn: 'root'
})
export class ManageMyUsersService {

  constructor(private client:HttpClient) {

   }

  getCachedToken(){
    let token:any = localStorage.getItem("token")
    return of(JSON.parse(token))
  }

   login(body:ILogin){
     let headers:any={
       "Content-Type":"application/json",
       responseType:"json"
     }
     this.client.post<any>("http://localhost:3000/users/login", body,headers).subscribe((cred:any)=>{
       console.log(cred);
       localStorage.setItem("token",JSON.stringify(cred.token))
     })
   }
   getAllCachedUsers(){
    const myUsers :any= localStorage.getItem("myUsers")
    return  of(JSON.parse(myUsers))
   }
   logOut(){
     localStorage.removeItem("token")
   }
   getAllUsers(){
     this.client.get("http://localhost:3000/users/",{responseType:"json"}).subscribe((users:any)=>{
       localStorage.setItem("myUsers",JSON.stringify(users.data));


     })
   }
   saveUser(user:any) {
    let headers:any={
      "Content-Type":"application/json",
      responseType: 'json',
    }
    this.client
      .post<any>(
        'http://localhost:3000/users/signup',
        user,
        headers
      )
      .subscribe((data) => {
        console.log(data);
      });
  }
}
