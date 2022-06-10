import { Component, OnDestroy, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { Subscription } from 'rxjs';

import { AppComponent } from '../../../../app.component';
import { AdminComponent } from '../../../admin.component';
import { ConfigService } from '../../../../shared/services/app.config.service';
import { AppConfig } from '../../../../shared/models/appconfig';

@Component({
    selector: 'app-config',
    templateUrl: './app.config.component.html'
})
export class AppConfigComponent implements OnInit, OnDestroy {

    scale = 14;

    scales: any[] = [12, 13, 14, 15, 16];

    config: AppConfig;

    subscription: Subscription;

    constructor(public app: AppComponent, public admin: AdminComponent, public configService: ConfigService, public primengConfig: PrimeNGConfig) { }

    ngOnInit() {
        this.config = this.configService.config;
        this.subscription = this.configService.configUpdate$.subscribe(config => {
            this.config = config;
            this.scale = 14;

            this.applyScale();
        });
    }

    onConfigButtonClick(event) {
        this.admin.configActive = !this.admin.configActive;
        this.admin.configClick = true;
        event.preventDefault();
    }

    incrementScale() {
        this.scale++;
        this.applyScale();
    }

    decrementScale() {
        this.scale--;
        this.applyScale();
    }

    applyScale() {
        document.documentElement.style.fontSize = this.scale + 'px';
    }

    onRippleChange(ripple) {
        this.primengConfig.ripple = ripple;
        this.configService.updateConfig({...this.config, ...{ripple}});
    }

    onInputStyleChange() {
        this.configService.updateConfig(this.config);
    }

    changeTheme(theme:string, dark:boolean){
        const themeElement = document.getElementById('theme-css');
        themeElement.setAttribute('href', 'assets/theme/' + theme + '/theme.css');
        this.configService.updateConfig({...this.config, ...{theme, dark}});
    }

    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}