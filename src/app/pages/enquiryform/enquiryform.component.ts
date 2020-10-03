import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, MinLengthValidator } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EnquiryformService } from './enquiryform.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-enquiryform',
  templateUrl: './enquiryform.component.html',
  styleUrls: ['./enquiryform.component.scss']
})
export class EnquiryformComponent implements OnInit {
  enquiryFormGroup: FormGroup
  cousesName: any

  

  constructor(private _formBuilder: FormBuilder, private _snackBar: MatSnackBar, private enquiryService: EnquiryformService, private router: Router) { 

    this.enquiryFormGroup = this._formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      phoneNo: [null, [Validators.required,Validators.minLength(10),Validators.maxLength(10),Validators.pattern("[0-9 ]{10}")]],
      examName: ['', Validators.required],
      message:['',Validators.pattern(".*\\S.*[a-zA-z0-9 ]")]
    });
    this.enquiryService.getCoursesName().subscribe(
      (res)=> {
        console.log(res)
        this.cousesName = res['courses_name']
      },
      (error)=>{
        console.log(error)
      }
    )

  }

  ngOnInit(): void {
    


  }

 

  submitEnquiry() {

    if(this.enquiryFormGroup.invalid) {
      let message = "* Feilds Are Required"
      let action = "close"
      this._snackBar.open(message, action, {
        duration: 2000,
      });
    }
    else {
      const firstName = this.enquiryFormGroup.value.firstName
      const lastName  = this.enquiryFormGroup.value.lastName
      const email     = this.enquiryFormGroup.value.email
      const phoneNo   = this.enquiryFormGroup.value.phoneNo
      const examName  = this.enquiryFormGroup.value.examName
      const message   = this.enquiryFormGroup.value.message
      this.enquiryService.submitEnquiry(firstName,lastName,email,phoneNo,examName,message).subscribe(
        (res)=> {
          console.log(res)

          

          let message = res['message']
          let action = "close"
          let snackBarRef = this._snackBar.open(message, action, {
            duration: 2000                                    
          });

          snackBarRef.afterDismissed().subscribe(() => {
            location.reload()
        });
        },
        (error)=> {
          console.log(error)
        }
      )
    }
    
  }

}
