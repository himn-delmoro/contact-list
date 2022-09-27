import { Component, OnInit, Input, Output, EventEmitter, ViewChild} from '@angular/core';
import { IContact } from 'src/app/Contact';


@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  
  @Input() contacts: IContact[] = []
  @Output() onDeleteContact: EventEmitter<IContact> = new EventEmitter
  @Output() onEditContact: EventEmitter<IContact> = new EventEmitter

  @ViewChild('contactForm') contactForm: any;
  
  constructor() { }

  ngOnInit(): void {
    
  }

  onDelete(contact: IContact){
    this.onDeleteContact.emit(contact)
  }

  onUpdate(contact: IContact){
    this.onEditContact.emit(contact)
  }
}
