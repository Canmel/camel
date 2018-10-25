import {Component, OnInit, OnChanges} from '@angular/core';
import * as $ from 'jquery';
import {HttpclientService} from '../../public/httpclient.service';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit, OnChanges {

  constructor() {
  }

  ngOnInit() {
    $('body').css('background-color', '#e5e6e6');
  }

  ngOnChanges() {
    alert('change');
  }

}
