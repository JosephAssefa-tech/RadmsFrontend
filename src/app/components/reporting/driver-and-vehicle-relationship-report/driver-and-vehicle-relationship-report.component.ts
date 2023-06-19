import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/services/language-change/language-change-service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-driver-and-vehicle-relationship-report',
  templateUrl: './driver-and-vehicle-relationship-report.component.html',
  styleUrls: ['./driver-and-vehicle-relationship-report.component.scss']
})
export class DriverAndVehicleRelationshipReportComponent implements OnInit {

  readonly viewerContainerStyle = environment.trReportViewerContainerStyle;
  readonly apiUrl = environment.reportingRestUrl;
  readonly reportSource = 'DriversInvolvedRelationship.trdp'

  constructor(public languageService:LanguageService) { }


  ngOnInit(): void {
  }

}
