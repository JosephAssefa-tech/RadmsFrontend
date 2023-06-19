import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/services/language-change/language-change-service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-owners-and-type-of-vehicles-report',
  templateUrl: './owners-and-type-of-vehicles-report.component.html',
  styleUrls: ['./owners-and-type-of-vehicles-report.component.scss']
})
export class OwnersAndTypeOfVehiclesReportComponent implements OnInit {

  readonly viewerContainerStyle = environment.trReportViewerContainerStyle;
  readonly apiUrl = environment.reportingRestUrl;
  readonly reportSource = 'OwnersAndTypesOfVehicles.trdp'

  constructor(public languageService:LanguageService) { }


  ngOnInit(): void {
  }

}
