import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { TaglistComponent } from './taglist/taglist.component';
import { BarComponent } from './bar/bar.component';
import { ContentComponent } from './content/content.component';
import { ContactsMenuComponent } from './contacts-menu/contacts-menu.component';
import { ContactProfileComponent } from './contact-profile/contact-profile.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { BlockConfigComponent } from './block-config/block-config.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    TaglistComponent,
    BarComponent,
    ContentComponent,
    ContactsMenuComponent,
    ContactProfileComponent,
    BlockConfigComponent
  ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
