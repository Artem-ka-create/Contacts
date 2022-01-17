import {AfterViewInit, Component, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";




export  interface Email{
  id?:number
  email:string
}

export interface PhoneNumber{
  id?:number
  country_by_code:string
  phone:string
}
export interface SocialPageLink{
  id?:number
  social_apl:string
  social_page_url:string
}
export interface Tag{
  id?:number
  label:string
  colour:string
}


export interface Contacts{
  id?:number
  name:string
  surname:string
  city:string
  job:string
  company:string
  adress:string
  date_of_birth:string
  email:Email[]
  phone_number:PhoneNumber[]
  social_page_link:SocialPageLink[]
  tags:Tag[]
}

export interface User{
  userName:string
  password:string
  emailId:string
  nickName:string
  roles:string

}


export enum Mode {
  VIEW,
  EDIT,
  ADD,
  MainScreen,
  SIGNIN,
  SIGNUP,
  CONFIRM
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit{



  title = 'angularContacts';
  mode=4
  modenav=4

  isloaded:boolean=false
  validation:boolean

  user:string=""
  pass:string=""

  httpOptions= {

  }

  contacts:Contacts[]=[]
  cont=''

constructor(private http:HttpClient) {}




  ngOnInit(): void {

  }

  updateData(){
    this.isloaded=false
    this.http.get<Contacts[]>('http://localhost:8080/api/contacts',this.httpOptions)
      .subscribe(response=>{
        this.contacts=response
        console.log()
        this.isloaded=true
      })
  }

  remove_Contact(id:number) {
    this.isloaded=false
    this.http.delete<void>(`http://localhost:8080/api/contacts/${id}`,this.httpOptions)
      .subscribe(res=>{
        this.contacts=this.contacts.filter( c => c.id !==id)
        console.log(res)
        this.isloaded=true
      })
  }

  update_Contact(conttact:Contacts){
    this.isloaded=false
    this.http.put<Contacts>(`http://localhost:8080/api/contacts`,conttact,this.httpOptions)
      .subscribe(()=>{
        this.isloaded=true
      })

  }

  add_Contact(newContact:Contacts){
    console.log("post: "+newContact.adress)
    if(this.cont.trim()){
      return
    }
      this.checkIsClear(newContact)
      if (this.validation) {
        this.http.post<Contacts>(`http://localhost:8080/api/contacts`, newContact, this.httpOptions)
          .subscribe(contac => {
            this.contacts.push(contac)
            this.cont = ''
          })
      }
  }


  onModeChange($event: number) {

    switch ($event) {
      case 0:
        this.mode=0
        this.modenav=0
        break;
      case 1:
        this.mode=1
        this.modenav=1
        break;
      case 2:
        this.mode=2
        this.modenav=2
        break;
      case 3:
        this.mode=3
        this.modenav=3
        break;
      case 4:
        this.mode=4
        this.modenav=4
        break;
      case 5:
        this.mode=5
        this.modenav=5
        break;
      case 6:
        this.mode=6
        this.modenav=6
        break;
    }

  }

  ngOnChanges(): void {

  }

  ngAfterViewInit(): void {
    console.log("change")
  }

  checkIsClear(newContact:Contacts) {
    if (newContact.name === "" &&
      newContact.surname === "" &&
      newContact.city === "" &&
      newContact.adress === "" &&
      newContact.job === "" &&
      newContact.company === "" &&
      newContact.date_of_birth === "") {
      this.validation = false
    }else{
      this.validation=true
    }

  }


  onLog($event: any) {
    this.httpOptions= {
      headers:new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + btoa(`${$event.login}:${$event.pass}`),
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'DELETE, POST, GET, PUT,OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With'

      })
    }

    this.updateData()

  }


}
