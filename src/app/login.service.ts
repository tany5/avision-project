import { Injectable } from '@angular/core';
import { LocalstorageService } from './localstorage.service';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  isLoggedIn: boolean = false
  constructor(private localstorageservice: LocalstorageService) { }

  checkAuth() {
    if(this.localstorageservice.getItem('userloggedIn') == '1') {
      return true
    }
    else {
      return false
    }
  }


}
