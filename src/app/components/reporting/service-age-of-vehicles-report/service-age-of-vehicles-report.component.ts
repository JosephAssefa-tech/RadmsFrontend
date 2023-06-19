import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/services/language-change/language-change-service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-service-age-of-vehicles-report',
  templateUrl: './service-age-of-vehicles-report.component.html',
  styleUrls: ['./service-age-of-vehicles-report.component.scss']
})
export class ServiceAgeOfVehiclesReportComponent implements OnInit {

  readonly viewerContainerStyle = environment.trReportViewerContainerStyle;
  readonly apiUrl = environment.reportingRestUrl;
  readonly reportSource = 'ServiceAgeOfVehicles.trdp'

  constructor(public languageService:LanguageService) { }


  ngOnInit(): void {
  }

}
