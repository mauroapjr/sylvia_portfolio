window.DS = {};
window.globals = {
  DATA_PATH_BASE: '',
  HAS_FRAME: "true",
  HAS_SLIDE: "true",
  lmsPresent: "false",
  tinCanPresent: "false",
  cmi5Present: "false",
  aoSupport: "false",
  scale: 'noscale',
  captureRc: "false",
  browserSize: 'optimal',
  bgColor: '#282828',
  features: 'ModernPlayerRefresh,MultipleQuizTracking,TextStyleHyperlinks',
  themeName: 'unified',
  preloaderColor: '#FFFFFF',
  suppressAnalytics: "false",
  productChannel: 'stable',
  publishSource: 'storyline',
  aid: 'auth0|5bd76226499f8154417ce8a0',
  cid: 'e1fee1f8-2e62-45ff-96c8-b5540d4faf66',
  playerVersion: '3.50.24668.0',
  maxIosVideoElements: '5',
  parseParams: function (qs) {
    if (window.globals.parsedParams != null) {
      return window.globals.parsedParams;
    }
    qs = (qs || window.location.search.substr(1)).split('+').join(' ');
    var params = {},
      tokens,
      re = /[?&]?([^=]+)=([^&]*)/g;
    while (tokens = re.exec(qs)) {
      params[decodeURIComponent(tokens[1]).trim()] =
        decodeURIComponent(tokens[2]).trim();
    }
    window.globals.parsedParams = params;
    return params;
  }
};
(function () {
  var classTypes = ['desktop', 'mobile', 'phone', 'tablet'];
  var addDeviceClasses = function (prefix, testObj) {
    var curr, i;
    for (i = 0; i < classTypes.length; i++) {
      curr = classTypes[i];
      if (testObj[curr]) {
        document.body.classList.add(prefix + curr);
      }
    }
  };
  var params = window.globals.parseParams(),
    isDevicePreview = params.devicepreview === '1',
    isPhoneOverride = params.deviceType === 'phone' || (isDevicePreview && params.phone == '1'),
    isTabletOverride = (params.deviceType === 'tablet' || isDevicePreview) && !isPhoneOverride,
    isMobileOverride = isPhoneOverride || isTabletOverride;
  var deviceView = {
    desktop: !window.isMobile.any && !isMobileOverride,
    mobile: window.isMobile.any || isMobileOverride,
    phone: isPhoneOverride || (window.isMobile.phone && !isTabletOverride),
    tablet: isTabletOverride || window.isMobile.tablet
  };
  window.globals.deviceView = deviceView;
  window.isMobile.desktop = !window.isMobile.any;
  window.isMobile.mobile = window.isMobile.any;
  addDeviceClasses('view-', deviceView);
})();