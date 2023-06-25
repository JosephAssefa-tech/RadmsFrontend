import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/services/language-change/language-change-service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-category-of-driving-license-report',
  templateUrl: './category-of-driving-license-report.component.html',
  styleUrls: ['./category-of-driving-license-report.component.scss']
})
export class CategoryOfDrivingLicenseReportComponent implements OnInit {

  readonly viewerContainerStyle = environment.trReportViewerContainerStyle;
  readonly apiUrl = environment.reportingRestUrl;
  readonly reportSource = 'DriversInvolvedLicenseCategory.trdp'

  constructor(public languageService:LanguageService) { }

  ngOnInit(): void {
  }

}
