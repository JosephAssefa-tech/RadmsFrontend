import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/services/language-change/language-change-service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-accident-by-pedestrian-health-report',
  templateUrl: './accident-by-pedestrian-health-report.component.html',
  styleUrls: ['./accident-by-pedestrian-health-report.component.scss']
})
export class AccidentByPedestrianHealthReportComponent implements OnInit {

  readonly viewerContainerStyle = environment.trReportViewerContainerStyle;
  readonly apiUrl = environment.reportingRestUrl;
  readonly reportSource = 'AccidentByPedestrianPhysicalHealth.trdp'

  constructor(public languageService:LanguageService) { }

  ngOnInit(): void {
  }

}
