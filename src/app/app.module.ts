import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChecklistComponent } from './checklist/checklist.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ScrollingModule } from '@angular/cdk/scrolling';


@NgModule({
  declarations: [
    AppComponent,
    ChecklistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NoopAnimationsModule,
    MatListModule,
    MatCardModule,
    MatDialogModule,
    MatInputModule,
    MatMenuModule,
    FlexLayoutModule,
    MatIconModule,
    MatToolbarModule,
    ScrollingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
