import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/services/language-change/language-change-service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-accident-by-collision-type-report',
  templateUrl: './accident-by-collision-type-report.component.html',
  styleUrls: ['./accident-by-collision-type-report.component.scss']
})
export class AccidentByCollisionTypeReportComponent implements OnInit {

  readonly viewerContainerStyle = environment.trReportViewerContainerStyle;
  readonly apiUrl = environment.reportingRestUrl;
  readonly reportSource = 'AccidentByCollisionType.trdp'

  constructor(public languageService:LanguageService) { }
  ngOnInit(): void {
  }

}
