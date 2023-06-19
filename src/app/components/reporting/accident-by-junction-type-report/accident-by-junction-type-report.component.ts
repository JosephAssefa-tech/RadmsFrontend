import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/services/language-change/language-change-service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-accident-by-junction-type-report',
  templateUrl: './accident-by-junction-type-report.component.html',
  styleUrls: ['./accident-by-junction-type-report.component.scss']
})
export class AccidentByJunctionTypeReportComponent implements OnInit {

  readonly viewerContainerStyle = environment.trReportViewerContainerStyle;
  readonly apiUrl = environment.reportingRestUrl;
  readonly reportSource = 'AccidentByRoadJunctionType.trdp'

  constructor(public languageService:LanguageService) { }


  ngOnInit(): void {
  }

}
