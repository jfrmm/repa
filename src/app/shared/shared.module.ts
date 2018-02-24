import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

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
  ]
})
export class SharedModule { }
