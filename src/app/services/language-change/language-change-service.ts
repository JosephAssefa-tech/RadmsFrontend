import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private selectedLanguageSubject: BehaviorSubject<string> = new BehaviorSubject<string>('english');

  get selectedLanguage$() {
    return this.selectedLanguageSubject.asObservable();
  }

  get selectedLanguage() {
    return this.selectedLanguageSubject.value;
  }

  set selectedLanguage(language: string) {
    this.selectedLanguageSubject.next(language);
  }
}
