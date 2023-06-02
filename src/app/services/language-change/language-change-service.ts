import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private selectedLanguageSubject: BehaviorSubject<string> = new BehaviorSubject<string>('english');


  private translations: any;
  private currentLanguage: string = 'en';


  // constructor() {
  //   this.loadTranslations(this.currentLanguage);
  // }

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
