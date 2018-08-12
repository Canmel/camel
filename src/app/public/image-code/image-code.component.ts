import {Component, OnInit} from '@angular/core';
import {Urls} from '../url';
import {Https} from '../https.service';

@Component({
  selector: 'app-image-code',
  templateUrl: './image-code.component.html',
  styleUrls: ['./image-code.component.css']
})
export class ImageCodeComponent implements OnInit {

  imageCodeUrl = '0000';

  constructor(public https: Https) {
  }

  ngOnInit() {
    this.https.get(Urls.SESSION.QRCODE).then(data => {
      this.imageCodeUrl = data['data']['verify'];
    });
  }

}
