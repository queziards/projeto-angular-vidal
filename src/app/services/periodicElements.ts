import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { PeriodicElement } from "../models/PeriodicElement";

@Injectable({
    providedIn: 'root'
  })
  export class PeriodicElementService {
    elementApiUrl = 'https://6705366b031fd46a830f1a1a.mockapi.io/table-admin/';
 
 constructor(private http: HttpClient) {}

  getElements(): Observable<PeriodicElement[]> {
    return this.http.get<PeriodicElement[]>(this.elementApiUrl);
  } //retorno da api 
  createElements(element: PeriodicElement): Observable<PeriodicElement>{
    return this.http.post<PeriodicElement>(this.elementApiUrl, element);
  }
  editElement(element: PeriodicElement): Observable<PeriodicElement>{
    return this.http.put<PeriodicElement>(`${this.elementApiUrl}${element.id}`, element);
  }
  deleteElement(id:number): Observable<any>{
    return this.http.delete<any>(`${this.elementApiUrl}${id}`);
  }
}