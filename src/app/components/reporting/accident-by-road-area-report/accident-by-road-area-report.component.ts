import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/services/language-change/language-change-service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-accident-by-road-area-report',
  templateUrl: './accident-by-road-area-report.component.html',
  styleUrls: ['./accident-by-road-area-report.component.scss']
})
export class AccidentByRoadAreaReportComponent implements OnInit {

  readonly viewerContainerStyle = environment.trReportViewerContainerStyle;
  readonly apiUrl = environment.reportingRestUrl;
  readonly reportSource = 'AccidentByRoadArea.trdp'

  constructor(public languageService:LanguageService) { }


  ngOnInit(): void {
  }

}
