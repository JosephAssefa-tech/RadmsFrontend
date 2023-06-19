import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/services/language-change/language-change-service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-driving-experience-of-drivers-report',
  templateUrl: './driving-experience-of-drivers-report.component.html',
  styleUrls: ['./driving-experience-of-drivers-report.component.scss']
})
export class DrivingExperienceOfDriversReportComponent implements OnInit {

  readonly viewerContainerStyle = environment.trReportViewerContainerStyle;
  readonly apiUrl = environment.reportingRestUrl;
  readonly reportSource = 'DriversInvolvedExperience.trdp'

  constructor(public languageService:LanguageService) { }


  ngOnInit(): void {
  }

}
