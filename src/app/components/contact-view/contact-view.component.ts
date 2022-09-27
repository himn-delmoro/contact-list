import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ContactService } from 'src/app/services/contact.service';
import { IContact } from 'src/app/Contact';
import { map } from 'rxjs';

@Component({
  selector: 'app-contact-view',
  templateUrl: './contact-view.component.html',
  styleUrls: ['./contact-view.component.css']
})
export class ContactViewComponent implements OnInit {

  id = ''
  contact?:any

  constructor(
    private route: ActivatedRoute,
    private contactService: ContactService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id']
    });
    this.contactService.getContact(this.id).pipe(
      map(res => this.contact = res)
      )
      .subscribe()
  }

}
