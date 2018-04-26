import {Component, OnInit} from '@angular/core';
import * as $ from 'Jquery';
import {Urls} from '../public/url';

@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.css']
})
export class LeftComponent implements OnInit {

  menus = {};
  constructor() {
    this.menus = Urls.BUSINESS;
  }

  ngOnInit() {
  }

  showOrHideMenu($event): void {
    $($event.target).parents('.sub-menu').siblings().removeClass('active');
    if ($($event.target).parents('.sub-menu').hasClass('active')) {
      $($event.target).parents('.sub-menu').find('.sub').slideUp();
      $($event.target).parents('.sub-menu').removeClass('active');
    } else {
      $($event.target).parents('.sub-menu').siblings().find('ul').slideUp();
      $($event.target).parents('.sub-menu').find('.sub').slideDown();
      $($event.target).parents('.sub-menu').addClass('active');
    }
  }

}
