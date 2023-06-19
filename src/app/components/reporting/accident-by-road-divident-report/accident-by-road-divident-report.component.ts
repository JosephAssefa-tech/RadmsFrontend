import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/services/language-change/language-change-service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-accident-by-road-divident-report',
  templateUrl: './accident-by-road-divident-report.component.html',
  styleUrls: ['./accident-by-road-divident-report.component.scss']
})
export class AccidentByRoadDividentReportComponent implements OnInit {

  readonly viewerContainerStyle = environment.trReportViewerContainerStyle;
  readonly apiUrl = environment.reportingRestUrl;
  readonly reportSource = 'AccidentByRoadDivident.trdp'

  constructor(public languageService:LanguageService) { }


  ngOnInit(): void {
  }

}
