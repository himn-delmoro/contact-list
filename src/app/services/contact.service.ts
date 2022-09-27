import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IContact } from 'src/app/Contact';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}

@Injectable()
export class ContactService {

  private apiUrl = 'http://localhost:5000/contacts'

  constructor(
    private http: HttpClient,
  ) { }

  getContacts(): Observable<IContact[]> {
    return this.http.get<IContact[]>(this.apiUrl)
  }

  deleteContact(contact: IContact): Observable<IContact> {
    const url = `${this.apiUrl}/${contact.id}`
    return this.http.delete<IContact>(url)
  }

  addContact(contact: IContact): Observable<IContact>{
    return this.http.post<IContact>(this.apiUrl, contact, httpOptions)
  }

  updateContact(contact: IContact): Observable<IContact>{
    const url = `${this.apiUrl}/${contact.id}`
    return this.http.put<IContact>(url, contact, httpOptions)
  }

  getContact(id: string): Observable<IContact> {
    const url = `${this.apiUrl}/${id}`
    return this.http.get<IContact>(url, httpOptions)
  }

}
