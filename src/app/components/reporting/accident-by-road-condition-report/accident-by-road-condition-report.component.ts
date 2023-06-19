import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/services/language-change/language-change-service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-accident-by-road-condition-report',
  templateUrl: './accident-by-road-condition-report.component.html',
  styleUrls: ['./accident-by-road-condition-report.component.scss']
})
export class AccidentByRoadConditionReportComponent implements OnInit {

  readonly viewerContainerStyle = environment.trReportViewerContainerStyle;
  readonly apiUrl = environment.reportingRestUrl;
  readonly reportSource = 'AccidentByRoadCondition.trdp'

  constructor(public languageService:LanguageService) { }


  ngOnInit(): void {
  }

}
