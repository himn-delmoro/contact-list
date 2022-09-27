import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactViewComponent } from './components/contact-view/contact-view.component';
import { ContactComponent } from './components/contact/contact.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: ContactComponent
  },
  {
    path: 'contact/:id',
    component: ContactViewComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
