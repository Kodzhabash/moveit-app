import { Component, Input, OnInit } from '@angular/core';
import { NAVIGATION_ITEMS } from '../../constants';
import { NavigationItem } from '../../models';

@Component({
  selector: 'mia-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.scss']
})
export class NavigationMenuComponent implements OnInit {
  @Input() items: NavigationItem[] = NAVIGATION_ITEMS;

  ngOnInit(): void {

  }
}
