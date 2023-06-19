import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/services/language-change/language-change-service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-accident-by-road-light-condition-report',
  templateUrl: './accident-by-road-light-condition-report.component.html',
  styleUrls: ['./accident-by-road-light-condition-report.component.scss']
})
export class AccidentByRoadLightConditionReportComponent implements OnInit {

  readonly viewerContainerStyle = environment.trReportViewerContainerStyle;
  readonly apiUrl = environment.reportingRestUrl;
  readonly reportSource = 'AccidentByRoadLightCondition.trdp'

  constructor(public languageService:LanguageService) { }


  ngOnInit(): void {
  }

}
