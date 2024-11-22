function redirectToStore() {
  var isAndroid = /android/i.test(navigator.userAgent);
  var isiOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  if (isAndroid) {
    // Redirect to the Play Store
    window.location.href =
      "https://play.google.com/store/apps/details?id=com.google.android.youtube";
  } else if (isiOS) {
    // Redirect to the App Store
    window.location.href =
      "https://apps.apple.com/app/youtube-watch-listen-stream/id544007664";
  }
}
