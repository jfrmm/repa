import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';

// the Material components we're using
import { MatButtonModule } from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatToolbarModule, MatGridListModule],
  exports: [MatButtonModule, MatToolbarModule, MatGridListModule],
})
export class MaterialModule { }
