import { NgModule, ModuleWithProviders } from "@angular/core";
import { CommonModule } from "@angular/common";
import { WINDOW_PROVIDERS } from "../_services/window.service";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

// the Angular Flex layout
import { FlexLayoutModule } from "@angular/flex-layout";

// the Material components we're using
import { MatGridListModule } from "@angular/material/grid-list";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatChipsModule } from "@angular/material/chips";
import { MatIconModule } from "@angular/material/icon";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";

import { NgxCarouselModule } from "ngx-carousel";
import "hammerjs";
import { NgxPageScrollModule } from "ngx-page-scroll";
import { GoTopButtonModule } from "ng2-go-top-button";

@NgModule({
  imports: [NgxCarouselModule, NgxPageScrollModule, GoTopButtonModule],
  exports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatChipsModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    NgxCarouselModule,
    NgxPageScrollModule,
    GoTopButtonModule
  ],
  declarations: [
    //
  ],
  providers: [WINDOW_PROVIDERS]
})
export class SharedModule {}
