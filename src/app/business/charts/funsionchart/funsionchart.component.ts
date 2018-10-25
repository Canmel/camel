import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-funsionchart',
  templateUrl: './funsionchart.component.html',
  styleUrls: ['./funsionchart.component.css']
})
export class FunsionchartComponent implements OnInit {

  funsionchartCompositeOption = {
    width: '100%',
    height: '400',
    type: 'mscombi2d',
    dataFormat: 'json',
    dataSource: {}
  };

  funsionchartHistogramOption = {
    id: 'chart1',
    width: '100%',
    height: '400',
    type: 'column2d',
    dataFormat: 'json',
    dataSource: {}
  };

  constructor() {
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
  }

}
