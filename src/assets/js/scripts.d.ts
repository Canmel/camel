declare let initScript: {
  initBpmn: () => any;
  main: () => void;
  svgMap: (obj) => void;
  successMsg: (title, msg) => void;
  errorMsg: (title, msg) => void;
  infoMsg: (title, msg) => void;
};
