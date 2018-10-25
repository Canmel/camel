import {Component, OnInit, Output, Input, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-svg-map',
  templateUrl: './svg-map.component.html',
  styleUrls: ['./svg-map.component.css']
})
export class SvgMapComponent implements OnInit {
  @Input('option') option;
  @Input('svg') svg;
  @Input('selector') selector;
  @Input('divClass') divClass = 'text-ee';

  @Output() clickCallBack = new EventEmitter;

  constructor() {
  }

  ngOnInit() {
    this.renderMap();
  }

  private renderMap() {
    console.log('渲染地图控件执行开始');
    initScript.svgMap(this);
  }

  private callBack(params) {
    this.clickCallBack.emit(params);
  }

}
