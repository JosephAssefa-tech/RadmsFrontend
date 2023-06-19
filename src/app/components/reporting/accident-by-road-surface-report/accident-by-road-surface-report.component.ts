import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/services/language-change/language-change-service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-accident-by-road-surface-report',
  templateUrl: './accident-by-road-surface-report.component.html',
  styleUrls: ['./accident-by-road-surface-report.component.scss']
})
export class AccidentByRoadSurfaceReportComponent implements OnInit {

  readonly viewerContainerStyle = environment.trReportViewerContainerStyle;
  readonly apiUrl = environment.reportingRestUrl;
  readonly reportSource = 'AccidentByRoadSurfaceType.trdp'

  constructor(public languageService:LanguageService) { }

  ngOnInit(): void {
  }

}
