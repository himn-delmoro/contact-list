import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ContactComponent } from './components/contact/contact.component';
import { InputComponent } from './components/input/input.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { ContactViewComponent } from './components/contact-view/contact-view.component';
import { ContactService } from './services/contact.service';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    ContactComponent,
    InputComponent,
    ContactListComponent,
    ContactViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
