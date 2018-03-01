import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

// our home Components
import { HomeComponent } from './home.component';
import { ScrollerComponent } from './scroller/scroller.component';
import { DescriptionComponent } from './description/description.component';
import { ServicesComponent } from './services/services.component';

// our Services
import { AreaService } from '../_services/area.service';

@NgModule({
  imports: [
    SharedModule
  ],
  exports: [
    DescriptionComponent,
    ServicesComponent,
  ],
  declarations: [
    HomeComponent,
    ScrollerComponent,
    DescriptionComponent,
    ServicesComponent
  ],
  providers: [
    AreaService
  ]
})
export class HomeModule { }
