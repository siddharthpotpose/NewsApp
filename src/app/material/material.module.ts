import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

const MaterialComponents=[
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatButtonModule
]

@NgModule({

  imports: [
    MaterialComponents

  ],
  exports:[
    MaterialComponents
  ]
})
export class MaterialModule { }
