import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private selectedLanguageSubject: BehaviorSubject<string> = new BehaviorSubject<string>('english');
  private currentLanguage: string = 'english';
  private translations: any = {};


  constructor(private http: HttpClient) {

  }
  loadTranslations(): Observable<any> {
    return this.http.get(`assets/i18n/${this.currentLanguage}.json`);
  }

  setLanguage(language: string): Observable<any> {
    this.currentLanguage = language;
    return this.loadTranslations();
  }

  getTranslation(key: string): string {
    return this.translations[key] || key;
  }

  get selectedLanguage$() {
    return this.selectedLanguageSubject.asObservable();
  }

  get selectedLanguage() {
    return this.selectedLanguageSubject.value;
  }

  set selectedLanguage(language: string) {
    this.selectedLanguageSubject.next(language);
  }

  // loadTranslations(language: string): void {
  //   this.currentLanguage = language;
  //   import(`../translations/${language}.json`).then((translation) => {
  //     this.translations = translation;
  //   });
  // }

  // translate(key: string): string {
  //   return this.translate(this.translations[key] || key);
  // }
}
