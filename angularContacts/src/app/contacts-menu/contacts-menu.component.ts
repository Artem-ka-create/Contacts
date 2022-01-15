import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Contacts, Mode} from "../app.component";

@Component({
  selector: 'app-contacts-menu',
  templateUrl: './contacts-menu.component.html',
  styleUrls: ['./contacts-menu.component.scss']
})
export class ContactsMenuComponent implements OnInit {


  @Input() mode:Mode;
  @Input() contacts:Contacts[];
  @Output() removeCont=new EventEmitter<number>()
  @Output() setModeChage = new EventEmitter<number>();
  @Output() setMore = new EventEmitter<number>();





  constructor() { }


  md=0
  social_name:string


  ngOnInit(): void {
    this.md=this.mode
    // console.log(this.contacts)
  }

  onModeChange($event: number) {
    console.log("aaaaa")
    switch ($event) {
      case 0:
        this.mode=0
        this.setModeChage.emit(0)
        break;
      case 1:
        this.mode=1
        this.setModeChage.emit(1)
        break;
      case 2:
        this.mode=2
        this.setModeChage.emit(2)
        break;
      case 3:
        this.mode=3
        this.setModeChage.emit(3)
    }

  }

  remove_Contact($event:number) {

    this.removeCont.emit($event)

  }


  chageMode_to_ADD() {
    this.md=Mode.ADD
    console.log(this.md)
    this.mode=this.md
    this.setModeChage.emit(2)
  }
  chageMode_to_VIEW() {
    this.md=Mode.VIEW
    console.log(this.md)
    this.setModeChage.emit(0)
  }

  onSetMore($event: number) {
    this.setMore.emit($event)
  }
}
