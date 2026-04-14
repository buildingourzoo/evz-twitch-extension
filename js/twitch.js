console.log("Twitch JS loaded");

if (window.Twitch && Twitch.ext) {
  Twitch.ext.onAuthorized(function(auth) {
    console.log("Twitch authorized:", auth);
  });

  Twitch.ext.onContext(function(context) {
    console.log("Twitch context:", context);
  });
} else {
  console.log("Twitch.ext not available yet");
}
