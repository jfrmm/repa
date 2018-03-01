import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

// our Shared module
import { SharedModule } from "./shared/shared.module";

// our Modules
import { HomeModule } from "./home/home.module";

// our Components
import { NavbarComponent } from "./navbar/navbar.component";
import { ContactsComponent } from "./contacts/contacts.component";

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    HomeModule
  ],
  exports: [
    //
  ],
  declarations: [AppComponent, NavbarComponent, ContactsComponent],
  providers: [
    //
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
