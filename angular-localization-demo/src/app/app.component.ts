import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-localization-demo';

  constructor(public translate: TranslateService) {
    const currentLanguage = this.translate.getBrowserLang();
    this.translate.setDefaultLang(currentLanguage);
    this.translate.use(currentLanguage);
  }
}
