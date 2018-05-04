import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";

// our home Components
import { HomeComponent } from "./home.component";
import { CarouselComponent } from "./carousel/carousel.component";
import { DescriptionComponent } from "./description/description.component";
import { ServicesComponent } from "./services/services.component";
import { MapSocialComponent } from "./map-social/map-social.component";

// our Services
import { AreaService } from "../_services/area.service";
import { CallNowComponent } from "./call-now/call-now.component";
import { ContactsComponent } from "./contacts/contacts.component";
import { MailComponent } from "./mail/mail.component";

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
  providers: [AreaService]
})
export class HomeModule {}
