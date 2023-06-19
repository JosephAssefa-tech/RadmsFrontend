import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/services/language-change/language-change-service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-accident-by-road-type-report',
  templateUrl: './accident-by-road-type-report.component.html',
  styleUrls: ['./accident-by-road-type-report.component.scss']
})
export class AccidentByRoadTypeReportComponent implements OnInit {

  readonly viewerContainerStyle = environment.trReportViewerContainerStyle;
  readonly apiUrl = environment.reportingRestUrl;
  readonly reportSource = 'AccidentByRoadType.trdp'

  constructor(public languageService:LanguageService) { }


  ngOnInit(): void {
  }

}
