import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private userService:UserService,private snack:MatSnackBar) { }
public user={
  username:'',
  password:'',
  fname:'',
  email:'',
  phone:'',
}
  ngOnInit(): void {
  }
  formSubmit(){
  
    console.log(this.user);
    if(this.user.username == '' || this.user.username==null){
     // this.snack.open("User Name is Required",'',{duration:3000,verticalPosition:'top',horizontalPosition:'right'});
     Swal.fire('Hellooo');
      return;
    }
this.userService.addUser(this.user).subscribe(
  (data)=>{
    //success
    console.log(data);
    //this.snack.open("User Name is Required",'',{duration:3000,verticalPosition:'top',horizontalPosition:'right'});
    
    return;
  },
  (error)=>{
    console.log(error);
alert('something went wrong')
  }
);
  }
}
