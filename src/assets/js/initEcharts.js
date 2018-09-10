var initEcharts = {
  main: {}
};

var echartMapRender = function (obj) {
  require("bpmn-js/dist/assets/diagram-js.css");
  require("bpmn-js/dist/assets/bpmn-font/css/bpmn.css");
  var BpmnModeler = require("bpmn-js/lib/Modeler"); //引入bpmn-js模型设计器，通过该模块可设计流程
  var propertiesPanelModule = require('bpmn-js-properties-panel'), //引入bpmn-js面板模块，通过该面板可设计节点属性
    propertiesProviderModule = require('bpmn-js-properties-panel/lib/provider/camunda');
  var $ = require("jquery/dist/jquery");

  var xml='<?xml version="1.0" encoding="UTF-8"?>\n' +
    '<bpmn2:definitions xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:bpmn2="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" xmlns:di="http://www.omg.org/spec/DD/20100524/DI" xsi:schemaLocation="http://www.omg.org/spec/BPMN/20100524/MODEL BPMN20.xsd" id="sample-diagram" targetNamespace="http://bpmn.io/schema/bpmn">\n' +
    '  <bpmn2:process id="Process_1">\n' +
    '    <bpmn2:startEvent id="StartEvent_1"/>\n' +
    '  </bpmn2:process>\n' +
    '  <bpmndi:BPMNDiagram id="BPMNDiagram_1">\n' +
    '    <bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="Process_1">\n' +
    '      <bpmndi:BPMNShape id="_BPMNShape_StartEvent_2" bpmnElement="StartEvent_1">\n' +
    '        <dc:Bounds height="36.0" width="36.0" x="412.0" y="240.0"/>\n' +
    '      </bpmndi:BPMNShape>\n' +
    '    </bpmndi:BPMNPlane>\n' +
    '  </bpmndi:BPMNDiagram>\n' +
    '</bpmn2:definitions>'; // my BPMN 2.0 xml

  var viewer = new BpmnModeler({
    container: 'body',
    propertiesPanel: {
      parent: '#js-canvas'
    },
    additionalModules: [
      propertiesPanelModule,
      propertiesProviderModule
    ],
    // needed if you'd like to maintain camunda:XXX properties in the properties panel
    moddleExtensions: {
      camunda: camundaModdleDescriptor
    }
  });

  viewer.importXML(xml, function(err) {

    if (err) {
      console.log('error rendering', err);
    } else {
      console.log('rendered');
    }
  });


  document.getElementById("saveBpmn").onclick  = function(){
    viewer.saveXML({ format: true }, function(err, xml) {

      if (err) {
        return console.error('could not save BPMN 2.0 diagram', err);
      }

      console.log('DIAGRAM', xml);

      parent.$("#bpm-flow-add-value").val(xml);
      parent.$("#bpm-flow-add-value").click();
      var index = parent.recognizeLayer.getFrameIndex(window.name);
      parent.recognizeLayer.close(index);
    });
  };
};
