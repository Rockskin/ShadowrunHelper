import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { trigger,style,transition,animate,keyframes,query,stagger, state } from '@angular/animations';
import { AppComponent } from '../app.component'

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('collapse', [
      state('open', style({
        opacity: '1',
        display: 'block',
        transform: 'translate3d(0, 0, 0)'
      })),
      state('closed',   style({
        opacity: '0',
        display: 'none',
        transform: 'translate3d(0, -100%, 0)'
      })),
      transition('closed => open', animate('200ms ease-in')),
      transition('open => closed', animate('100ms ease-out'))
    ])
  ]
})

export class TopNavComponent implements OnInit {

  constructor(private appComponent:AppComponent) { }

  collapse:string = "open";
  
  ngOnInit() {
  }
  toggleCollapse() {
  // this.show = !this.show
    this.collapse = this.collapse == "open" ? 'closed' : 'open';
  }
  GoBlankCharacter(){
    this.appComponent.ShowModule('blankCharacter');
  }

  GoBuildMethod(){
    this.appComponent.ShowModule('buildMethod');
  }
  

}
