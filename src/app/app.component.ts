import { CityMasterComponent } from './components/city-master/city-master.component';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { RegionComponent } from './components/region/region.component';
import { Router } from '@angular/router';
import { LanguageService } from './services/language-change/language-change-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  selectedLanguage: string = 'english';
  isAuthenticated=false;
  isCollapsed = false;
  defaultFileList: NzUploadFile[] = [
    {
      uid: '-1',
      name: 'xxx.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
    }]

  fileList1 = [...this.defaultFileList];
constructor(private languageService:LanguageService,private router:Router,private modal: NzModalService, private fb: FormBuilder)
{

}
  selectMenuItem(menuItem: string): void {
    switch(menuItem) {
      case 'home':
        this.router.navigate(['/home']);
        break;
      case 'accident':
        this.router.navigate(['/accident']);
        break;
        case 'accident-data':
        this.router.navigate(['/welcome']);
        break;
        case 'region':
          this.router.navigate(['/region']);
          break;
        case 'zone':
          this.router.navigate(['/zone']);
          break;
          case 'looksup':
            this.router.navigate(['/looksup']);
            break;
      default:
        this.router.navigate(['/welcome']);
        break;
    }
  }
  regionTable(): void {

    this.router.navigate(['/region']);
}
zoneTable():void{
  this.router.navigate(['/zone']);
}
woredaTable():void{
  this.router.navigate(['/woreda']);
}
subcityTable():void{
  this.router.navigate(['/subcity']);
}
cityTable():void{
  this.router.navigate(['/city']);

}
// cityMaster(): void {
//   const modalRef = this.modal.create({
//     nzTitle: 'City Master ',
//     nzContent: CityMasterComponent,
//     nzFooter: null
//   });
// }
switchLanguage(language: string) {
  this.languageService.selectedLanguage = language;

}
}
