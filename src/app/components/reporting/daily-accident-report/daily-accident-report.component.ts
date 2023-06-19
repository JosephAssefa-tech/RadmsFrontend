import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/services/language-change/language-change-service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-daily-accident-report',
  templateUrl: './daily-accident-report.component.html',
  styleUrls: ['./daily-accident-report.component.scss']
})
export class DailyAccidentReportComponent implements OnInit {
  readonly viewerContainerStyle = environment.trReportViewerContainerStyle;
  readonly apiUrl = environment.reportingRestUrl;
  readonly reportSource = 'DailyAccidents.trdp'

  constructor(public languageService:LanguageService) { }

  ngOnInit(): void {
  }

}
