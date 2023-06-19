import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/services/language-change/language-change-service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-victim-animals-report',
  templateUrl: './victim-animals-report.component.html',
  styleUrls: ['./victim-animals-report.component.scss']
})
export class VictimAnimalsReportComponent implements OnInit {

  readonly viewerContainerStyle = environment.trReportViewerContainerStyle;
  readonly apiUrl = environment.reportingRestUrl;
  readonly reportSource = 'VictimAnimals.trdp'

  constructor(public languageService:LanguageService) { }

  ngOnInit(): void {
  }

}
