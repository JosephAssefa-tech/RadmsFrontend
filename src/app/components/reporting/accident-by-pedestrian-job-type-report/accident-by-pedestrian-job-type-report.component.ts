import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/services/language-change/language-change-service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-accident-by-pedestrian-job-type-report',
  templateUrl: './accident-by-pedestrian-job-type-report.component.html',
  styleUrls: ['./accident-by-pedestrian-job-type-report.component.scss']
})
export class AccidentByPedestrianJobTypeReportComponent implements OnInit {

  readonly viewerContainerStyle = environment.trReportViewerContainerStyle;
  readonly apiUrl = environment.reportingRestUrl;
  readonly reportSource = 'AccidentByPedestrianJobType.trdp'

  constructor(public languageService:LanguageService) { }

  ngOnInit(): void {
  }

}
