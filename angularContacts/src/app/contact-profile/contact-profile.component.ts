import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Contacts, Email, Mode, PhoneNumber, SocialPageLink} from "../app.component";
import {Tag} from "@angular/compiler/src/i18n/serializers/xml_helper";
import {colors} from "@angular/cli/utilities/color";

@Component({
  selector: 'app-contact-profile',
  templateUrl: './contact-profile.component.html',
  styleUrls: ['./contact-profile.component.scss']
})
export class ContactProfileComponent implements OnInit {


  @Input() mode: number;
  @Input() contact: Contacts;
  @Input() id: number;
  @Output() setModeChage = new EventEmitter<number>();
  @Output() addnewCont = new EventEmitter<Contacts>();
  @Output() updateCont = new EventEmitter<Contacts>();


  col_of_button: string
  check_empty: boolean
  socialInputs: SocialPageLink[] = []
  phoneInputs: PhoneNumber[] = []
  emailInputs: Email[] = []
  validation: boolean = true
  tag_id_save:any
  color_save:any
  label_save:any

  // @ts-ignore
  newContact: Contacts = {
    adress: "",
    city: "",
    company: "",
    date_of_birth: "",
    email: [],
    job: "",
    name: "",
    phone_number: [],
    social_page_link: [],
    surname: "",
    tags: []

  }


  constructor() {
  }

  ngOnInit(): void {

    if(this.mode==1) {
      this.tag_id_save = this.contact.tags[0].id

      console.log(this.tag_id_save)
    }
    if (this.mode == 2) {
      this.newContact.tags.push({colour: "#000000", label: "def"})
    }



    this.check_empty = false
  }


  chageMode_to_ADD() {

    this.mode = 2
    this.setModeChage.emit(2)
  }

  chageMode_to_VIEW() {
    this.mode = 0
    this.setModeChage.emit(0)
  }

  chageMode_to_MainScreen() {
    if (this.mode == 2) {


      this.newContact.email = this.emailInputs
      this.newContact.phone_number = this.phoneInputs
      this.newContact.social_page_link = this.socialInputs

      //console.log(this.newContact)

      this.add_Contact(this.newContact)
    }

    this.mode = 3
    this.setModeChage.emit(3)
  }

  chageMode_to_EDIT() {
    this.mode = 1

    this.setModeChage.emit(1)
  }


  add_Contact($event: Contacts) {
    console.log($event)
    this.addnewCont.emit($event)
  }

  update_Contact($event: Contacts) {
    this.updateCont.emit($event)
  }


  addSocial_Click() {

    // console.log(this.check_empty)
    // console.log(this.socialInputs)
    // console.log(this.socialInputs.length)

    if (this.socialInputs.length == 0) {
      this.check_empty = false
    }

    if (!this.check_empty) {
      this.socialInputs.push({social_page_url: "", social_apl: ""})
    }
    this.check_empty = true
  }

  removeSocial_Click(i: number | undefined) {

    if (typeof i === "number") {
      console.log(i)
      this.socialInputs.splice(i, 1);
    }
  }

  removeSocial_MainClick(i: number | undefined) {

    if (typeof i === "number") {
      console.log(i)
      console.log(this.contact.social_page_link)
      this.contact.social_page_link.splice(i, 1);
      console.log(this.contact.social_page_link)
    }
  }

  newInputSocial(i: number, $event: any) {

    if ($event.target.value.length == 0 || $event.target.value == '') {
      this.check_empty = true
    } else {
      this.check_empty = false
    }

    console.log(this.check_empty)

    if (!this.check_empty)
      this.socialInputs[i].social_page_url = $event.target.value
    console.log(this.socialInputs)

  }


  addPhone_Click() {

    if (this.phoneInputs.length == 0) {
      this.check_empty = false
    }

    if (!this.check_empty) {
      this.phoneInputs.push({phone: "", country_by_code: ""})
    }
    this.check_empty = true
  }

  removePhone_Click(i: number | undefined) {

    if (typeof i === "number") {
      console.log(i)
      this.phoneInputs.splice(i, 1);
    }
  }

  removePhone_MainClick(i: number | undefined) {

    if (typeof i === "number") {
      //console.log(i)
      //console.log(this.contact.phone_number)
      this.contact.phone_number.splice(i, 1);
      //console.log(this.contact.phone_number)
    }
  }

  newInputPhone(i: number, $event: any) {

    if ($event.target.value.length == 0 || $event.target.value == '') {
      this.check_empty = true
    } else {
      this.check_empty = false
    }

    console.log(this.check_empty)

    if (!this.check_empty)
      this.phoneInputs[i].phone = $event.target.value
    console.log(this.phoneInputs)

  }

  addEmail_Click() {

    if (this.emailInputs.length == 0) {
      this.check_empty = false
    }

    if (!this.check_empty) {
      this.emailInputs.push({email: ""})
    }
    this.check_empty = true
  }

  removeEmail_Click(i: number | undefined) {

    if (typeof i === "number") {
      console.log(i)
      this.emailInputs.splice(i, 1);
    }
  }

  removeEmail_MainClick(i: number | undefined) {

    if (typeof i === "number") {
      //console.log(i)
      //console.log(this.contact.phone_number)
      this.contact.email.splice(i, 1);
      //console.log(this.contact.phone_number)
    }
  }

  newInputEmail(i: number, $event: any) {

    if ($event.target.value.length == 0 || $event.target.value == '') {
      this.check_empty = true
    } else {
      this.check_empty = false
    }

    console.log(this.check_empty)

    if (!this.check_empty)
      this.emailInputs[i].email = $event.target.value
    console.log(this.emailInputs)

  }


  onNameInput($event: any) {
    console.log($event.target.value)
    this.newContact.name = $event.target.value
  }
  onSurnameInput($event: any) {
    this.newContact.surname = $event.target.value
  }
  onCityInput($event: any) {
    this.newContact.city = $event.target.value
  }
  onAdressInput($event: any) {
    this.newContact.adress = $event.target.value
  }
  onJobInput($event: any) {
    this.newContact.job = $event.target.value
  }
  onCompanyInput($event: any) {
    this.newContact.company = $event.target.value
  }
  onBirthDayInput($event: any) {
    this.newContact.date_of_birth = $event.target.value
  }
  onTagGetColour($event: any) {
    console.log($event.target.value)
    // this.newContact.tags[0].colour=$event.target.value

    if (this.newContact.tags.length > 0) {
      this.newContact.tags.splice(0, this.newContact.tags.length)
    }
    this.newContact.tags.push({colour: $event.target.value, label: "def"})
  }
  onTagInput($event: any) {
    this.newContact.tags[0].label = $event.target.value
  }





  chageMode_to_VIEW_and_apdate() {


    console.log(this.contact.tags[0].id)


    this.contact.email =this.contact.email.concat(this.emailInputs)
    this.contact.phone_number = this.contact.phone_number.concat(this.phoneInputs)
    this.contact.social_page_link = this.contact.social_page_link.concat(this.socialInputs)
    this.contact.tags.splice(0,this.contact.tags.length-1)

    //this.contact.tags[0].id
    this.color_save=this.contact.tags[0].colour
    this.label_save=this.contact.tags[0].label

    this.contact.tags.splice(0,this.contact.tags.length)
    this.contact.tags.push({id: this.tag_id_save,
                            colour: this.color_save,
                            label:this.label_save})


    console.log(this.contact)

    this.update_Contact(this.contact)
    this.mode = 3
    // console.log("tyta")
    this.setModeChage.emit(3)
  }


  upCityInput($event: any) {
    this.contact.city = $event.target.value
  }
  upAdressInput($event: any) {
    this.contact.adress = $event.target.value
  }
  upJobInput($event: any) {
    this.contact.job = $event.target.value
  }
  upCompanyInput($event: any) {
    this.contact.company = $event.target.value
  }
  upBirthDayInput($event: any) {
    this.contact.date_of_birth = $event.target.value
  }
  upNameInput($event: any) {
    console.log($event.target.value)
    this.contact.name = $event.target.value
  }
  upSurnameInput($event: any) {
    this.contact.surname = $event.target.value
  }
  upTagGetColour($event: any) {
    console.log($event.target.value)
    // this.newContact.tags[0].colour=$event.target.value

    if (this.contact.tags.length > 0) {
      this.contact.tags.splice(0, this.contact.tags.length)
    }
    this.contact.tags.push({colour: $event.target.value, label: "def"})
  }



}
