import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/services/language-change/language-change-service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-insurance-detail-report',
  templateUrl: './insurance-detail-report.component.html',
  styleUrls: ['./insurance-detail-report.component.scss']
})
export class InsuranceDetailReportComponent implements OnInit {

  readonly viewerContainerStyle = environment.trReportViewerContainerStyle;
  readonly apiUrl = environment.reportingRestUrl;
  readonly reportSource = 'NumberOfVictimsInAccidentAndInsuranceDetail.trdp'

  constructor(public languageService:LanguageService) { }

  ngOnInit(): void {
  }

}
