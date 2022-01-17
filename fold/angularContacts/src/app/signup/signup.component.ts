import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {User} from "../app.component";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {


  @Input() mode:number;
  @Output() setModeChage = new EventEmitter<number>();

  @ViewChild('inputLoginRef',{static:false}) inputLogin:ElementRef
  @ViewChild('inputPassRef',{static:false}) inputPass:ElementRef
  @ViewChild('inputEmailRef',{static:false}) inputEmail:ElementRef
  @ViewChild('inputNicknameRef',{static:false}) inputNickname:ElementRef
  @ViewChild('confirmref',{static:false}) confirmref:ElementRef


index:number

  httpOptions= {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'DELETE, POST, GET, PUT,OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With'

    })
  }

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.index=0
  }


  make_condirm(){

    let user={} as User
    user.userName=this.inputLogin.nativeElement.value
    user.password=this.inputPass.nativeElement.value
    user.emailId=this.inputEmail.nativeElement.value
    user.nickName=this.inputNickname.nativeElement.value
    user.roles="ROLE_USER"

    this.http.post("http://localhost:8080/register",user,this.httpOptions).subscribe()

    this.index++
  }

  chageMode_to_MainMenu() {
    this.mode = 3

    this.setModeChage.emit(3)
  }
  chageMode_to_SingIN() {
    this.mode = 4
    this.index=0

    this.http.get("http://localhost:8080/confirm-account?token="+this.confirmref.nativeElement.value).subscribe()

    this.setModeChage.emit(4)
  }
  chageMode_to_SignUp() {
    this.mode = 5

    this.setModeChage.emit(5)
  }




}
