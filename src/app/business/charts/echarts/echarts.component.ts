import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-echarts',
  templateUrl: './echarts.component.html',
  styleUrls: ['./echarts.component.css']
})
export class EchartsComponent implements OnInit {

  public svgRoute = 'assets/svg/ningbo.svg';
  public echartMapArea = 'echarts-render-area';
  public divClass = 'text-ee';
  public option;

  constructor() {
  }

  ngOnInit() {
    this.option = {
      backgroundColor: '#eee',
      height: '100px',
      title: {
        text: '宁波市供电状态',
        subtext: '地图SVG扩展',
        x: 'center'
      },
      tooltip: {
        trigger: 'item'
      },
      toolbox: {
        show: true,
        orient: 'vertical',
        x: 'right',
        y: 'center',
        feature: {
          mark: {
            show: true
          },
          dataView: {
            show: true,
            readOnly: false
          },
          restore: {
            show: true
          },
          saveAsImage: {
            show: true
          }

        }
      },
      series: [{
        name: '地图显示标题',
        type: 'map',
        mapType: 'ship',
        roam: false,
        itemStyle: {
          normal: {
            label: {
              show: true
            },
            borderWidth: 2,
            borderColor: '#888888'
          },
          emphasis: {
            label: {
              show: true
            }
          }
        },
        data: [{
          // 当图表类型为地图时，需要说明每部分数据对应的县，可设置选中状态，所以设置为
          name: '宁海县',
          value: 9000,
          selected: true
        },
          {
            name: '余姚市',
            value: 20000
          },
          {
            name: '北仑区',
            value: 30000
          }
        ],
        geoCoord: {
          'CST616_6#': [465, 290]
        }
      }]
    };
  }

}
