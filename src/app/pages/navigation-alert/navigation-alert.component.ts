import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LoginPopupComponent } from '../login-popup/login-popup.component';

@Component({
  selector: 'app-navigation-alert',
  templateUrl: './navigation-alert.component.html',
  styleUrls: ['./navigation-alert.component.scss']
})
export class NavigationAlertComponent implements OnInit {

  constructor(public router: Router,private dialogref: MatDialogRef<NavigationAlertComponent>,private dialog : MatDialog) { }

  ngOnInit(): void {
  }
  loginModal(){
    this.dialogref.close()

    const dialogref = this.dialog.open(LoginPopupComponent)
    dialogref.afterOpened().subscribe(()=>{
      this.router.navigate([''])
    })
  }

  closeModal(){
    this.dialogref.close()
  }
}
