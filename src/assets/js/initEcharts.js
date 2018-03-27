var initEcharts = {
  main: {}
}

/**
 * 渲染echarts map
 * 本方法为渲染echarts map 组件
 * option 示例 | 具体option参数还请前往 http://echarts.baidu.com/option.html#title
 * {
 * 	backgroundColor: '#eee', // 地图的背景色，与地图本身没什么关系
 *  title: {
 * 		text: '宁波市供电状态', // 标题
 * 		subtext: '地图SVG扩展', // 副标题...
 *  		x: 'center' // x ...
 * 	},
 *  tooltip: {	// tips
 *  		trigger: 'item',		 // 可选 item | axis | none 触发方式
 * 		borderColor: '#f50',		// 边框色
 * 		backgroundColor: 'rgba(255,0,255,0.7)', // 背景色
 * 		formatter: '{b}: {c}'	// 提示信息格式化， 支持回调 ..::>_<::..
 *  },
 *  series: [{	// 地图上的数据信息
 * 		name: '大型商业机密档案柜', // ..
 * 		type: 'map',		// type
 * 		mapType: 'ship',
 * 		roam: false, 	// 滚轮缩放
 * 		itemStyle: {		// item style 没说的
 * 			normal: {
 * 				label: {
 * 					show: true
 * 				}
 * 			},
 * 			emphasis: {
 * 				label: {
 * 					show: true
 * 				}
 * 			}
 * 		},
 * 		data: [],
 * 		geoCoord: {
 * 			'CST616_6#': [465, 290]
 * 		}
 * 	}]
 * }
 *
 * @param {Object} option 地图的参数，包含标记， 示例， 工具等
 * @param {Object} svgRoute 拓展地图的地图信息
 * @param {Object} echartMapArea 需要渲染的dom节点， 重要的事情说。。。 写 三遍 id id id
 */
var echartMapRender = function (obj) {
  require(
    [
      'echarts',
      'echarts/chart/map' // 按需加载，不过又有谁知道呢，前端就是这么玄奥，玄之又玄的东西，再次鞠躬 1， 2， 3， 4
    ],
    function (ec) {
      require('echarts/util/mapData/params').params.ship = {
        getGeoJson: function (callback) {
          $.ajax({
            url: obj.svg,
            dataType: 'xml',
            success: function (xml) {
              callback(xml)
            }
          });
        }
      }
      // 基于准备好的dom，初始化echarts图表

      var myChart = ec.init(document.getElementById(obj.selector));
      // 为echarts对象加载数据
      myChart.setOption(obj.option);

      myChart.on('click', function (params) {
        obj.callBack(params);
      });
    }
  );
}
