import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Contacts} from "../app.component";


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  @Input() mode:number;
  @Output() setModeChage = new EventEmitter<number>();
  @Output() log = new EventEmitter<any>();

  @ViewChild('loginRef',{static :false}) login:ElementRef
  @ViewChild('passRef',{static :false}) pass:ElementRef



  constructor() { }

  ngOnInit(): void {
  }

  chageMode_to_MainMenu() {
    this.mode = 3

    this.log.emit({login:this.login.nativeElement.value, pass:this.pass.nativeElement.value})

    this.setModeChage.emit(3)
  }
  chageMode_to_SingIN() {
    this.mode = 4



    this.setModeChage.emit(4)
  }
  chageMode_to_SignUp() {
    this.mode = 5

    this.setModeChage.emit(5)
  }


}
