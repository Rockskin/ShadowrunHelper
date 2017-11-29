import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AppComponent} from '../app.component';
@Component({
  selector: 'app-blank-character',
  templateUrl: './blank-character.component.html',
  styleUrls: ['./blank-character.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BlankCharacterComponent implements OnInit {

  constructor(public appComponent:AppComponent ) { }

  ngOnInit() {
  }

}
