import {Component, OnInit} from '@angular/core';
import * as $ from 'Jquery';

@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.css']
})
export class LeftComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  showOrHideMenu($event): void {
    const alist = $('.sidebar-menu').children('a');
    if ($($event.target).hasClass('active')) {
      $('.sub').slideUp();
      $($event.target).removeClass('active');
      return;
    }
    $('.sub').slideDown();
    $('.sub-menu').addClass('active');
    $($event.target).addClass('active');
  }

}
