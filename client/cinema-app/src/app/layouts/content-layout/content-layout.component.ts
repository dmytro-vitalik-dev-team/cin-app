import { Component, OnInit, NgZone } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-content-layout',
  templateUrl: './content-layout.component.html',
  styleUrls: ['./content-layout.component.scss']
})
export class ContentLayoutComponent implements OnInit {
    //Sidenav responsive
    width;
    height;
    mode:string = 'side';
    open = 'true';
    title = 'Logo title';

    constructor(public ngZone: NgZone, public route: Router){
        this.changeMode();
        window.onresize = (e) => {
            ngZone.run(() => {
                this.changeMode();
            });
        };
    }

    ngOnInit() {
    }

    changeMode() {
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        if(this.width <= 800) {
            this.mode = 'over';
            this.open = 'false';
        }
        if(this.width > 800) {
            this.mode = 'side';
            this.open = 'true';
        }
    }

    login() {
        this.route.navigate(['/auth/login']);
    }
}