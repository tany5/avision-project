import { NgZone } from '@angular/core';
import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pass-success',
  templateUrl: './pass-success.component.html',
  styleUrls: ['./pass-success.component.scss']
})
export class PassSuccessComponent implements OnInit {

  constructor(private ngZone: NgZone, public dialog: MatDialog,public dialogRef: MatDialogRef<PassSuccessComponent>,public router: Router,public route: ActivatedRoute) {

    let script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = "gtag('event', 'conversion', {'send_to': 'AW-799310302/id8JCKLQnt8BEN6Dkv0C'})";
    document.getElementsByTagName('head')[0].appendChild(script);
   }

  ngOnInit(): void {
  }
  closepopup(){
    //console.log(this.dialogRef)
    //this.dialog.closeAll()
    //this.dialogRef.close()
    this.ngZone.run(() =>  this.dialog.closeAll());
    // this.dialogRef.afterClosed().subscribe(()=> {
    //   this.router.navigate(['dashboard/testseries'])
    // })

    //this.router.navigate(['dashboard/testseries'])

  }
  

}
