import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})

export abstract class BaseService<T>
{

  private readonly APIUrl = environment.baseApiUrl + this.getResourceUrl();
constructor(protected httpClient:HttpClient)
{
}
abstract getResourceUrl(): string;


getAll(): Observable<Array<T>> {

  return this.httpClient.get<T[]>(this.APIUrl);

}
getAllByLanguage(language: string): Observable<Array<T>>
{
  const params = new HttpParams().set('language', language);
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

  return this.httpClient.get<T[]>(this.APIUrl,{ params, headers });
}
get(id: string | number): Observable<[T]> {
  return this.httpClient.get<[T]>(this.APIUrl + "/" + id);
}
getById(id: string): Observable<T> {
  return this.httpClient.get<T>(this.APIUrl + "/" + id);
}

post(resource: any) {
  return this.httpClient.post(this.APIUrl ,resource,{headers:{"Content-Type":"application/json"}});

}
delete(id: string | number) {
  return this.httpClient.delete(this.APIUrl + "/" + id);
}
update(resource: any) {
  return this.httpClient.put(`${this.APIUrl}/EditClient`, resource)

}

}
