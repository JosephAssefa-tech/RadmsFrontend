import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/services/language-change/language-change-service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-victim-vehicles-report',
  templateUrl: './victim-vehicles-report.component.html',
  styleUrls: ['./victim-vehicles-report.component.scss']
})
export class VictimVehiclesReportComponent implements OnInit {

  readonly viewerContainerStyle = environment.trReportViewerContainerStyle;
  readonly apiUrl = environment.reportingRestUrl;
  readonly reportSource = 'VictimVehicles.trdp'

  constructor(public languageService:LanguageService) { }

  ngOnInit(): void {
  }

}
