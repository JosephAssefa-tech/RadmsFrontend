import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/services/language-change/language-change-service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-previous-year-investigation-report',
  templateUrl: './previous-year-investigation-report.component.html',
  styleUrls: ['./previous-year-investigation-report.component.scss']
})
export class PreviousYearInvestigationReportComponent implements OnInit {

  readonly viewerContainerStyle = environment.trReportViewerContainerStyle;
  readonly apiUrl = environment.reportingRestUrl;
  readonly reportSource = 'PreviousYearInvestigationAndCourtDecision.trdp'

  constructor(public languageService:LanguageService) { }

  ngOnInit(): void {
  }

}
