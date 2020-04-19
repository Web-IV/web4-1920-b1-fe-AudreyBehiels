import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
//import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
//import { BrowserModule } from "@angular/platform-browser";
import { MatSelectModule } from "@angular/material/select";
import { MatListModule } from "@angular/material/list";
import { MatIconModule } from "@angular/material/icon";
import { MatCardModule } from "@angular/material/card";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatInputModule } from "@angular/material/input";

@NgModule({
  declarations: [],
  imports: [
    // BrowserModule,
    CommonModule,
    // BrowserAnimationsModule,
    FlexLayoutModule,
    MatListModule,
    MatCardModule,
    MatIconModule,
    MatSelectModule,
  ],
  exports: [
    //BrowserAnimationsModule,
    FlexLayoutModule,
    MatListModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
  ],
})
export class MaterialModule {}
