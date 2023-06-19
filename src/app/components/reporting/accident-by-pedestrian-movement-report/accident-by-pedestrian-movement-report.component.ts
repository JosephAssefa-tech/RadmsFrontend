import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/services/language-change/language-change-service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-accident-by-pedestrian-movement-report',
  templateUrl: './accident-by-pedestrian-movement-report.component.html',
  styleUrls: ['./accident-by-pedestrian-movement-report.component.scss']
})
export class AccidentByPedestrianMovementReportComponent implements OnInit {

  readonly viewerContainerStyle = environment.trReportViewerContainerStyle;
  readonly apiUrl = environment.reportingRestUrl;
  readonly reportSource = 'AccidentByPedestrianMovementType.trdp'

  constructor(public languageService:LanguageService) { }

  ngOnInit(): void {
  }

}
