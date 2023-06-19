import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/services/language-change/language-change-service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-accident-by-pavement-type-report',
  templateUrl: './accident-by-pavement-type-report.component.html',
  styleUrls: ['./accident-by-pavement-type-report.component.scss']
})
export class AccidentByPavementTypeReportComponent implements OnInit {

  readonly viewerContainerStyle = environment.trReportViewerContainerStyle;
  readonly apiUrl = environment.reportingRestUrl;
  readonly reportSource = 'AccidentByPavementType.trdp'

  constructor(public languageService:LanguageService) { }

  ngOnInit(): void {
  }

}
