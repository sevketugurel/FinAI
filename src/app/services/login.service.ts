import { Injectable } from '@angular/core';
import { RegisterModel } from '../models/register-form.interface';
import { GlobalKeys } from '../models/global-keys.enum';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }
  

  login(payload: any){
    localStorage.setItem(GlobalKeys.LOGIN,payload)
  }

  register(payload: RegisterModel) {
    // console.log("payload:",payload);
    // console.log("getUsers:",this.getUsers());
    let userList = this.getUsers() ? this.getUsers() : [];
    // console.log(userList);
    userList.push(payload);
    const obj = JSON.stringify(userList);
    localStorage.setItem(GlobalKeys.REGISTER, obj);
  }
  
  getUsers() {
    const users = JSON.parse(localStorage.getItem(GlobalKeys.REGISTER)!) || []; // Use an empty array if the stored data is null or undefined
    return users;
  }
  
  
}
