import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// the Angular Flex layout
import { FlexLayoutModule } from "@angular/flex-layout";

// the Material components we're using
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  imports: [
    FlexLayoutModule,
    MatButtonModule,
    MatToolbarModule,
    MatGridListModule,
    MatCardModule
  ],
  exports: [
    FlexLayoutModule,
    MatButtonModule,
    MatToolbarModule,
    MatGridListModule,
    MatCardModule
  ],
})
export class MaterialModule { }
