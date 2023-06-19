import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/services/language-change/language-change-service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-hourly-accident-report',
  templateUrl: './hourly-accident-report.component.html',
  styleUrls: ['./hourly-accident-report.component.scss']
})
export class HourlyAccidentReportComponent implements OnInit {
  readonly viewerContainerStyle = environment.trReportViewerContainerStyle;
  readonly apiUrl = environment.reportingRestUrl;
  readonly reportSource = 'HourlyAccidents.trdp'

  constructor(public languageService:LanguageService) { }

  ngOnInit(): void {
  }

}
