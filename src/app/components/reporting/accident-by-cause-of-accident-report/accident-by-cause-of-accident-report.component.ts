import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/services/language-change/language-change-service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-accident-by-cause-of-accident-report',
  templateUrl: './accident-by-cause-of-accident-report.component.html',
  styleUrls: ['./accident-by-cause-of-accident-report.component.scss']
})
export class AccidentByCauseOfAccidentReportComponent implements OnInit {

  readonly viewerContainerStyle = environment.trReportViewerContainerStyle;
  readonly apiUrl = environment.reportingRestUrl;
  readonly reportSource = 'AccidentByCauseOfAccidentType.trdp'

  constructor(public languageService:LanguageService) { }

  ngOnInit(): void {
  }

}
