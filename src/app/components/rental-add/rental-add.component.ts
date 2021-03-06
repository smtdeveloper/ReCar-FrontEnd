import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/user';
import { RentalService } from 'src/app/services/rental.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-rental-add',
  templateUrl: './rental-add.component.html',
  styleUrls: ['./rental-add.component.css']
})
export class RentalAddComponent implements OnInit {


  user:User
  rentalAddForm : FormGroup

  constructor(
    private formBuilder:FormBuilder,
    private rentalService:RentalService,
    private toastrService:ToastrService,
    private router:Router,
    private userService:UserService
  ) { }

  ngOnInit(): void {

    this.createRentalAddForm();
   
  }

   createRentalAddForm(){
    this.rentalAddForm = this.formBuilder.group({
     carId:["" ,Validators.required],
     customerId:["" ,Validators.required],
     rentDate:["" ,Validators.required],
     returnDate:["" ,Validators.required]

    })
  }

  addFindexPoint(){
    this.userService.addFindexPoint(this.userService.getUserId()).subscribe((response)=>{
      this.toastrService.info(response.message,"Bilgi")
    })
  }
  add(){
    if(this.rentalAddForm.valid){
      let rentalModel = Object.assign({},this.rentalAddForm.value)
      this.rentalService.add(rentalModel).subscribe(response =>{
        this.router.navigate(['/payment/', JSON.stringify(rentalModel)]);
        this.toastrService.success(response.message,"Başarılı Eklendi")
        this.addFindexPoint();
       
       
      },responseError=>{
        if(responseError.error.Errors.length>0){
          for (let i = 0; i <responseError.error.Errors.length; i++) {
            this.toastrService.error(responseError.error.Errors[i].ErrorMessage
              ,"Doğrulama hatası"
              );
            }
          }
        }
      );
    } else {
      this.toastrService.error('Formunuz eksik', 'Dikkat');
    }
  }



}
