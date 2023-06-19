import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/services/language-change/language-change-service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-level-of-driving-license-report',
  templateUrl: './level-of-driving-license-report.component.html',
  styleUrls: ['./level-of-driving-license-report.component.scss']
})
export class LevelOfDrivingLicenseReportComponent implements OnInit {

  readonly viewerContainerStyle = environment.trReportViewerContainerStyle;
  readonly apiUrl = environment.reportingRestUrl;
  readonly reportSource = 'DriversInvolvedLevelOfLicense.trdp'

  constructor(public languageService:LanguageService) { }


  ngOnInit(): void {
  }

}
