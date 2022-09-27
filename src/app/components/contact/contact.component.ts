import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';
import { IContact } from 'src/app/Contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contacts: IContact[] = []
  getContactDetailsData?: IContact

  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
    this.getContacts()
  }

  getContacts(){
    this.contactService.getContacts()
    .subscribe((contacts) => 
      this.contacts = contacts
      )
  }

  deleteContact(contact: IContact){ 
    this.contactService.deleteContact(contact)
    .subscribe(() => 
      this.contacts = this.contacts.filter( (c) => c.id !== contact.id)
      )
  }

  addContact(contact: IContact){
    if(contact.id){
       return this.updateContact(contact)
    }
    this.contactService.addContact(contact)
    .subscribe((contact) => (
      this.contacts.push(contact)
    ))
  }

  getContactDetails(contact: IContact){
    this.getContactDetailsData = contact //will pass the contactDetails to input components input contact
  }

  updateContact(contact: IContact){
    this.contactService.updateContact(contact)
    .subscribe(() => 
      this.getContacts()
    )
  }

}
