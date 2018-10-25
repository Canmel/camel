import {Component, OnInit} from '@angular/core';
import * as $ from 'Jquery';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {

  public svgRoute = 'assets/svg/ningbo.svg';
  public echartMapArea = 'echarts-render-area';
  public divClass = 'text-ee';
  public option;
  public title = '图表';
  public subTitle = '不同场景和不同插件的图表DEMO';

  funsionchartCompositeOption = {
    width: '100%',
    height: '100%',
    type: 'mscombi2d',
    dataFormat: 'json',
    dataSource: {}
  };

  funsionchartHistogramOption = {
    id: 'chart1',
    width: '100%',
    height: '100%',
    type: 'column2d',
    dataFormat: 'json',
    dataSource: {}
  };

  mapClickCallBack(params) {
    console.log('我是ng回调', params);
  }

  constructor() {
  }

  changeTitle(title, sub) {
    this.title = title;
    this.subTitle = sub;
  }

  ngOnInit() {
    this.funsionchartCompositeOption.dataSource = {
      'chart': {
        'caption': '标题信息，说明文字',
        'subcaption': '子标题',
        'xaxisname': '月',
        'yaxisname': '数量',
        'numberprefix': '￥',
        'theme': 'ocean'
      },
      'categories': [
        {
          'category': [
            {
              'label': '一月'
            },
            {
              'label': '二月'
            },
            {
              'label': '三月'
            },
            {
              'label': '四月'
            },
            {
              'label': '五月'
            },
            {
              'label': '六月'
            },
            {
              'label': '七月'
            },
            {
              'label': '八月'
            },
            {
              'label': '九月'
            },
            {
              'label': '十月'
            },
            {
              'label': '十一月'
            },
            {
              'label': '十二月'
            }
          ]
        }
      ],
      'dataset': [
        {
          'seriesname': 'Actual Revenue',
          'data': [
            {
              'value': '16000'
            },
            {
              'value': '20000'
            },
            {
              'value': '18000'
            },
            {
              'value': '19000'
            },
            {
              'value': '15000'
            },
            {
              'value': '21000'
            },
            {
              'value': '16000'
            },
            {
              'value': '20000'
            },
            {
              'value': '17000'
            },
            {
              'value': '25000'
            },
            {
              'value': '19000'
            },
            {
              'value': '23000'
            }
          ]
        },
        {
          'seriesname': 'Projected Revenue',
          'renderas': 'line',
          'showvalues': '0',
          'data': [
            {
              'value': '15000'
            },
            {
              'value': '16000'
            },
            {
              'value': '17000'
            },
            {
              'value': '18000'
            },
            {
              'value': '19000'
            },
            {
              'value': '19000'
            },
            {
              'value': '19000'
            },
            {
              'value': '19000'
            },
            {
              'value': '20000'
            },
            {
              'value': '21000'
            },
            {
              'value': '22000'
            },
            {
              'value': '23000'
            }
          ]
        },
        {
          'seriesname': 'Profit',
          'renderas': 'area',
          'showvalues': '0',
          'data': [
            {
              'value': '4000'
            },
            {
              'value': '5000'
            },
            {
              'value': '3000'
            },
            {
              'value': '4000'
            },
            {
              'value': '1000'
            },
            {
              'value': '7000'
            },
            {
              'value': '1000'
            },
            {
              'value': '4000'
            },
            {
              'value': '1000'
            },
            {
              'value': '8000'
            },
            {
              'value': '2000'
            },
            {
              'value': '7000'
            }
          ]
        }
      ]

    };

    this.funsionchartHistogramOption.dataSource = {
      'chart': {
        'caption': 'Harry\'s SuperMart',
        'subCaption': 'Top 5 stores in last month by revenue',
        'numberprefix': '$',
        'theme': 'fint'
      },
      'data': [
        {
          'label': 'Bakersfield Central',
          'value': '880000'
        },
        {
          'label': 'Garden Groove harbour',
          'value': '730000'
        },
        {
          'label': 'Los Angeles Topanga',
          'value': '590000'
        },
        {
          'label': 'Compton-Rancho Dom',
          'value': '520000'
        },
        {
          'label': 'Daly City Serramonte',
          'value': '330000'
        }
      ]
    };


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
