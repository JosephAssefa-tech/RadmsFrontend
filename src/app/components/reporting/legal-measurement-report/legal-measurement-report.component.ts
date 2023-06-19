import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/services/language-change/language-change-service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-legal-measurement-report',
  templateUrl: './legal-measurement-report.component.html',
  styleUrls: ['./legal-measurement-report.component.scss']
})
export class LegalMeasurementReportComponent implements OnInit {

  readonly viewerContainerStyle = environment.trReportViewerContainerStyle;
  readonly apiUrl = environment.reportingRestUrl;
  readonly reportSource = 'LegalMeasurement.trdp'

  constructor(public languageService:LanguageService) { }

  ngOnInit(): void {
  }

}
