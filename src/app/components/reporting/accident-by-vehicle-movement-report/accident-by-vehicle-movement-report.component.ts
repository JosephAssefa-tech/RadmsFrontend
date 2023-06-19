import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/services/language-change/language-change-service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-accident-by-vehicle-movement-report',
  templateUrl: './accident-by-vehicle-movement-report.component.html',
  styleUrls: ['./accident-by-vehicle-movement-report.component.scss']
})
export class AccidentByVehicleMovementReportComponent implements OnInit {

  readonly viewerContainerStyle = environment.trReportViewerContainerStyle;
  readonly apiUrl = environment.reportingRestUrl;
  readonly reportSource = 'AccidentByVehicleMovement.trdp'

  constructor(public languageService:LanguageService) { }
  ngOnInit(): void {
  }

}
