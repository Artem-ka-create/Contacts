import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Contacts, PhoneNumber,Email,SocialPageLink,Mode} from "../app.component";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit, AfterViewInit {




  @Input() mode:number;
  @Input() contacts:Contacts[];
  @Output() setModeChage = new EventEmitter<number>();
  @Output() removeCont=new EventEmitter<number>();
  @Output() setMore=new EventEmitter<number>();
  @Output() addnewCont=new EventEmitter<Contacts>();
  @Output() updateCont=new EventEmitter<Contacts>();



  contact:Contacts



  constructor() {

  }


  ngAfterViewInit(): void {
    // console.log("content-after")
  }

  ngOnInit(): void {
    // console.log("tyt")
    // console.log(this.contacts[0])
  }


  onModeChange($event: number) {
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


  remove_Contact(id:number) {
    this.removeCont.emit(id)
  }
  update_Contact($event:Contacts){


    this.updateCont.emit($event)

  }

  add_Contact($event:Contacts){
    this.addnewCont.emit($event)
}


  onSetMore($event: number) {
    this.contact=this.contacts.filter(f=>f.id===$event)[0]
    this.setMore.emit($event)
  }
}
