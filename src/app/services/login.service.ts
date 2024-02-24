import { Injectable } from '@angular/core';
import { RegisterModel } from '../models/register-form.interface';
import { GlobalKeys } from '../models/global-keys.enum';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isLogin: boolean = false;

  constructor() { }

  login(payload: any) {
    localStorage.setItem(GlobalKeys.LOGIN, JSON.stringify(payload));
    this.isLogin = true; 
  }

  register(payload: RegisterModel) {
    let userList = this.getUsers() || [];
    userList.push(payload);
    const obj = JSON.stringify(userList);
    localStorage.setItem(GlobalKeys.REGISTER, obj);
  }
  
  getUsers() {
    const users = JSON.parse(localStorage.getItem(GlobalKeys.REGISTER) || '[]');
    return users;
  }
}
