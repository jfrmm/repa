import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// our module with Material parts
import { MaterialModule } from './material.module';

// our components
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ContactsComponent } from './contacts/contacts.component';

// services
import { AreaService } from './_services/area.service';
import { DescriptionComponent } from './home/description/description.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactsComponent,
    NavbarComponent,
    DescriptionComponent,
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [
    AreaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
