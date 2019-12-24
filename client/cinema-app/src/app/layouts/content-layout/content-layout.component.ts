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
    navList: NavList[];

    constructor(public ngZone: NgZone, public route: Router)
    {
        this.navList = [
            { categoryName: 'Скоро у прокаті' },
            { categoryName: 'Увійти' }
        ];
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

}

export class NavList {
    categoryName: string;
    constructor(_categoryName:string) {
        this.categoryName = _categoryName;  
    }
}

export class NavListItem {
    subCategoryName: string;
    subCategoryLink: string;
    subCategoryQuery?: any;
    visable: boolean;
}