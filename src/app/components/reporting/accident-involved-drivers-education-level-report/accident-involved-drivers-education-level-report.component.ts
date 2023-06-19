import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/services/language-change/language-change-service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-accident-involved-drivers-education-level-report',
  templateUrl: './accident-involved-drivers-education-level-report.component.html',
  styleUrls: ['./accident-involved-drivers-education-level-report.component.scss']
})
export class AccidentInvolvedDriversEducationLevelReportComponent implements OnInit {
  readonly viewerContainerStyle = environment.trReportViewerContainerStyle;
  readonly apiUrl = environment.reportingRestUrl;
  readonly reportSource = 'DriversInvolvedEducationLevel.trdp'

  constructor(public languageService:LanguageService) { }


  ngOnInit(): void {
  }

}
