import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WINDOW_PROVIDERS } from '../_services/window.service';

// the Angular Flex layout
import { FlexLayoutModule } from "@angular/flex-layout";

// the Material components we're using
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    //
  ],
  exports: [
    CommonModule,
    FlexLayoutModule,
    MatGridListModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule
  ],
  declarations: [
    //
  ],
  providers: [
    WINDOW_PROVIDERS
  ]
})
export class SharedModule { }
