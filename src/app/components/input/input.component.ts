import { Component, OnInit, Input, Output, EventEmitter, ViewChild, OnChanges} from '@angular/core';
import { IContact } from 'src/app/Contact';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit, OnChanges {

  contactDetails = {
    id: undefined,
    name: '',
    email: '',
    phone: ''
  }

  @ViewChild('contactForm') contactForm: any
  @Output() onAddContact: EventEmitter<IContact> = new EventEmitter
  @Input() contact?: IContact //contact details to be edit

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    if(this.contact){
      this.contactForm?.control.setValue({ //will populate if edit is active
        id: this.contact?.id,
        name: this.contact?.name,
        email: this.contact?.email,
        phone: this.contact?.phone
      })
    }
  }

  onSubmit(){
    this.onAddContact.emit(this.contactDetails)
    this.contactForm.reset();
  }
  


}
