export function reportCallConversion(url) {
  if (!window.gtag) return;

  const callback = () => {
    if (url) window.location = url;
  };

  window.gtag("event", "conversion", {
    send_to: "AW-17938224109/uTUXCIXUrfobEO2nzulC",
    value: 1.0,
    currency: "TRY",
    event_callback: callback,
  });
}