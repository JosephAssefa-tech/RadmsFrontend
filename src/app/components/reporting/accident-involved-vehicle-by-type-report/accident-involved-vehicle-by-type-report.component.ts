import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/services/language-change/language-change-service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-accident-involved-vehicle-by-type-report',
  templateUrl: './accident-involved-vehicle-by-type-report.component.html',
  styleUrls: ['./accident-involved-vehicle-by-type-report.component.scss']
})
export class AccidentInvolvedVehicleByTypeReportComponent implements OnInit {

  readonly viewerContainerStyle = environment.trReportViewerContainerStyle;
  readonly apiUrl = environment.reportingRestUrl;
  readonly reportSource = 'AcciedentsByVehicleType.trdp'

  constructor(public languageService:LanguageService) { }

  ngOnInit(): void {
  }

}
