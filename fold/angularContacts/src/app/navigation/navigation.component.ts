import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Mode} from "../app.component";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})



export class NavigationComponent implements OnInit {


  @Input() mode:number;
  @Output() setModeChage = new EventEmitter<number>();



  @ViewChild("addmodeRef",{static:false}) add_mode: ElementRef




  constructor() { }

  ngOnInit(): void {


  }

  chageMode_to_ADD() {
    this.mode=2
    console.log(this.mode)

    this.setModeChage.emit(2)
  }
  chageMode_to_VIEW() {
    this.mode=0
    this.setModeChage.emit(0)
  }


  chageMode_to_MAINSCREEN() {
    console.log(this.mode)
    this.mode=3
    this.setModeChage.emit(3)
  }
}
