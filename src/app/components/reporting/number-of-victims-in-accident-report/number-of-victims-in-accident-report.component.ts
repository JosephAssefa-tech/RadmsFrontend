import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/services/language-change/language-change-service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-number-of-victims-in-accident-report',
  templateUrl: './number-of-victims-in-accident-report.component.html',
  styleUrls: ['./number-of-victims-in-accident-report.component.scss']
})
export class NumberOfVictimsInAccidentReportComponent implements OnInit {

  readonly viewerContainerStyle = environment.trReportViewerContainerStyle;
  readonly apiUrl = environment.reportingRestUrl;
  readonly reportSource = 'NumberOfVictimsInAccident.trdp'

  constructor(public languageService:LanguageService) { }

  ngOnInit(): void {
  }

}
