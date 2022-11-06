import { Component } from '@angular/core';
import { ChildrenOutletContexts } from '@angular/router';
import { Animations } from 'src/assets/animations/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    Animations.slideInAnimation
  ]
})
export class AppComponent {
  title = 'tenth-challenge';
  constructor(private contexts: ChildrenOutletContexts) {}
  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }
}
