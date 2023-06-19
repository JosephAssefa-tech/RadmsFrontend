import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/services/language-change/language-change-service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-accident-by-road-air-condition-report',
  templateUrl: './accident-by-road-air-condition-report.component.html',
  styleUrls: ['./accident-by-road-air-condition-report.component.scss']
})
export class AccidentByRoadAirConditionReportComponent implements OnInit {

  readonly viewerContainerStyle = environment.trReportViewerContainerStyle;
  readonly apiUrl = environment.reportingRestUrl;
  readonly reportSource = 'AccidentByRoadAirCondition.trdp'

  constructor(public languageService:LanguageService) { }

  ngOnInit(): void {
  }

}
