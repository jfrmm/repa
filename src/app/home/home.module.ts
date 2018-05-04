import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";

// our home Components
import { HomeComponent } from "./home.component";
import { CarouselComponent } from "./carousel/carousel.component";
import { DescriptionComponent } from "./description/description.component";
import { ServicesComponent } from "./services/services.component";
import { MapSocialComponent } from "./map-social/map-social.component";

// our Services
import { ServiceService } from "../_services/service.service";
import { CallNowComponent } from "./call-now/call-now.component";
import { ContactsComponent } from "./contacts/contacts.component";
import { MailComponent } from "./mail/mail.component";
import { CarouselService } from "../_services/carousel.service";

@NgModule({
  imports: [SharedModule],
  exports: [DescriptionComponent, ServicesComponent],
  declarations: [
    HomeComponent,
    CarouselComponent,
    DescriptionComponent,
    ServicesComponent,
    MapSocialComponent,
    CallNowComponent,
    ContactsComponent,
    MailComponent
  ],
  providers: [ServiceService, CarouselService]
})
export class HomeModule {}
