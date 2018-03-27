import {Component, OnInit} from '@angular/core';
import {Urls} from '../url';

@Component({
  selector: 'app-image-code',
  templateUrl: './image-code.component.html',
  styleUrls: ['./image-code.component.css']
})
export class ImageCodeComponent implements OnInit {

  imageCodeUrl = Urls.SESSION.QRCODE;

  constructor() {
  }

  ngOnInit() {
  }

}
