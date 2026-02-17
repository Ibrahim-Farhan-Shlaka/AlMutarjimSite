function gtag_report_conversion(url) {
  var callback = function () {
    if (typeof(url) != 'undefined') {
      window.location = url;
    }
  };
  gtag('event', 'conversion', {
      'send_to': 'AW-17938224109/uTUXCIXUrfobEO2nzulC',
      'value': 1.0,
      'currency': 'TRY',
      'event_callback': callback
  });
  return false;
}