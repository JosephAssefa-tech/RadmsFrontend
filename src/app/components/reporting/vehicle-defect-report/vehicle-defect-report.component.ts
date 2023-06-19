import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/services/language-change/language-change-service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-vehicle-defect-report',
  templateUrl: './vehicle-defect-report.component.html',
  styleUrls: ['./vehicle-defect-report.component.scss']
})
export class VehicleDefectReportComponent implements OnInit {

  readonly viewerContainerStyle = environment.trReportViewerContainerStyle;
  readonly apiUrl = environment.reportingRestUrl;
  readonly reportSource = 'AccidentByVehicleDefect.trdp'

  constructor(public languageService:LanguageService) { }


  ngOnInit(): void {
  }

}
