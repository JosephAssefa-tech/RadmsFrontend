import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/services/language-change/language-change-service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-accident-involved-drivers-sex-report',
  templateUrl: './accident-involved-drivers-sex-report.component.html',
  styleUrls: ['./accident-involved-drivers-sex-report.component.scss']
})
export class AccidentInvolvedDriversSexReportComponent implements OnInit {

  readonly viewerContainerStyle = environment.trReportViewerContainerStyle;
  readonly apiUrl = environment.reportingRestUrl;
  readonly reportSource = 'DriversInvolvedGender.trdp'

  constructor(public languageService:LanguageService) { }


  ngOnInit(): void {
  }

}
