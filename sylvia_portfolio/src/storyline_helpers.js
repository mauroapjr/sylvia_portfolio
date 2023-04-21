(function(window) {
  function isMobile(userAgent) {
    var mobile = {
      apple: {
        phone: /iPhone/i.test(userAgent),
        ipod: /iPod/i.test(userAgent),
        tablet: /iPad/i.test(userAgent),
        device: /iPhone/i.test(userAgent) || /iPod/i.test(userAgent) || /iPad/i.test(userAgent)
      },
      android: {
        phone: /(?=.*\bAndroid\b)(?=.*\bMobile\b)/i.test(userAgent),
        tablet: /Android/i.test(userAgent) && !/Mobile/i.test(userAgent),
        device: /Android/i.test(userAgent)
      },
      windows: {
        phone: /IEMobile/i.test(userAgent),
        tablet: /(?=.*\bWindows\b)(?=.*\bARM\b)/i.test(userAgent),
        device: /IEMobile/i.test(userAgent) || /(?=.*\bWindows\b)(?=.*\bARM\b)/i.test(userAgent)
      },
      other: {
        blackberry: /BlackBerry/i.test(userAgent),
        blackberry10: /BB10/i.test(userAgent),
        opera: /Opera Mini/i.test(userAgent),
        firefox: /(?=.*\bFirefox\b)(?=.*\bMobile\b)/i.test(userAgent),
        chrome: /(?=.*\bChrome\b)(?=.*\bMobile\b)/i.test(userAgent),
        device: /BlackBerry/i.test(userAgent) || /BB10/i.test(userAgent) || /Opera Mini/i.test(userAgent) || /(?=.*\bFirefox\b)(?=.*\bMobile\b)/i.test(userAgent) || /(?=.*\bChrome\b)(?=.*\bMobile\b)/i.test(userAgent)
      },
      seven_inch: /(?:Nexus 7|BNTV250|Kindle Fire|Silk|GT-P1000)/i.test(userAgent),
      any: false,
      phone: false,
      tablet: false
    };

    mobile.any = mobile.apple.device || mobile.android.device || mobile.windows.device || mobile.other.device || mobile.seven_inch;
    mobile.phone = mobile.apple.phone || mobile.android.phone || mobile.windows.phone || mobile.other.phone || false;
    mobile.tablet = mobile.apple.tablet || mobile.android.tablet || mobile.windows.tablet || false;

    return mobile;
  }

  window.isMobile = isMobile(window.navigator.userAgent);
})(window);

export default isMobile();