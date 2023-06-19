import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/services/language-change/language-change-service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-accident-involved-drivers-age-report',
  templateUrl: './accident-involved-drivers-age-report.component.html',
  styleUrls: ['./accident-involved-drivers-age-report.component.scss']
})
export class AccidentInvolvedDriversAgeReportComponent implements OnInit {
  readonly viewerContainerStyle = environment.trReportViewerContainerStyle;
  readonly apiUrl = environment.reportingRestUrl;
  readonly reportSource = 'DriversInvolvedAge.trdp'

  constructor(public languageService:LanguageService) { }


  ngOnInit(): void {
  }

}
