import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
    selector: 'page-tabs',
    template: 
    `
        <ion-tabs>
            <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="md-home"></ion-tab>
            <ion-tab [root]="tab2Root" tabTitle="Parties" tabIcon="md-megaphone"></ion-tab>
            <ion-tab [root]="tab3Root" tabTitle="Elections" tabIcon="md-pie"></ion-tab>
            <ion-tab [root]="tab4Root" tabTitle="Quiz" tabIcon="md-done-all"></ion-tab>
        </ion-tabs>
    `
})

export class TabsPage {

    tab1Root = 'HomePage';
    tab2Root = 'PartiesPage';
    tab3Root = 'ElectionSeatsPage';
    tab4Root = 'QuizPage';

}