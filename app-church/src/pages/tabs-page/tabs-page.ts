import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { ParoquiaPage } from '../paroquia/paroquia';
import { MapPage } from '../map/map';
import { EvangelhoPage } from '../evangelho/evangelho';
import { NoticiasPage } from '../noticias/noticias';
import { SpeakerListPage } from '../speaker-list/speaker-list';

@Component({
  templateUrl: 'tabs-page.html'
})
export class TabsPage {
  // set the root pages for each tab
  tab1Root: any = EvangelhoPage;
  tab2Root: any = ParoquiaPage;
  tab3Root: any = NoticiasPage;
  tab4Root: any = SpeakerListPage;
  tab5Root: any = MapPage;
  mySelectedIndex: number;

  constructor(navParams: NavParams) {
    this.mySelectedIndex = navParams.data.tabIndex || 0;
  }

}
