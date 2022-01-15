import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Contacts, Mode} from "../app.component";

@Component({
  selector: 'app-block-config',
  templateUrl: './block-config.component.html',
  styleUrls: ['./block-config.component.scss']
})
export class BlockConfigComponent implements OnInit {

  @Input() contact:Contacts;
  @Input() mode:Mode;
  @Output() setModeChage = new EventEmitter<number>();
  @Output() setMore = new EventEmitter<number>();
  @Output() removeCont=new EventEmitter<number>();




  constructor() { }

  social_tittle:string
  envelope_tittle:string
  adress_tittle:string
  tag_col:string
  id_cont: number | undefined =0

  md=0

  ngOnInit(): void {
    // console.log(this.contact)

    this.md=this.mode
     // console.log(this.contact.social_page_link[0].social_page_url)

    if (this.contact.social_page_link[0].social_page_url.length>0){
    this.social_tittle=this.contact.social_page_link[0].social_page_url
    }

    if (this.contact.email[0].email!=""){
    this.envelope_tittle=this.contact.email[0].email
    }

    if (this.contact.adress!=""){
    this.adress_tittle=this.contact.adress
    }

    //console.log('lenth is social_tittle'+this.social_tittle.length)
    if (this.social_tittle!="" && this.social_tittle.length>20 ){
      this.social_tittle=this.social_tittle.substr(0,20)
      this.social_tittle=this.social_tittle+'...'
    }
   // console.log('lenth is envelope_tittle'+this.envelope_tittle.length)
    if (this.envelope_tittle!="" && this.envelope_tittle.length>17){
      this.envelope_tittle=this.envelope_tittle.substr(0,17)
      this.envelope_tittle=this.envelope_tittle+'...'
    }
    //console.log('lenth is adress_tittle'+this.adress_tittle.length)
    if(this.adress_tittle!="" && this.adress_tittle.length>18){
      this.adress_tittle=this.adress_tittle.substr(0,18)
      this.adress_tittle=this.adress_tittle+'...'
    }

    if (this.contact.tags[0].colour===""){
      this.tag_col="#808080"
    }
    if (this.contact.tags[0].colour!=""){
     // console.log(this.contact.tags[0].colour )
      this.tag_col=this.contact.tags[0].colour
    }
   // console.log(this.tag_col)





  }

  chageMode_to_VIEW() {
    this.mode=0
    this.setMore.emit(this.contact.id)
    this.setModeChage.emit(0)

  }


  remove_Contact() {
  this.removeCont.emit(this.contact.id)
  }
}
