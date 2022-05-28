// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement("script");

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
  setTimeout(() => {
    player = new YT.Player("infra-geo-ops-video", {
      height: "315",
      width: "560 ",
      videoId: "fh0C553kA3c",
      playerVars: {
        playsinline: 1,
        autoplay: 0,
      },
      events: {
        onReady: onPlayerReady,
        onStateChange: onPlayerStateChange,
      },
    });
  }, 3000);
}

function stopVideo() {
  player.stopVideo();
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING && !done) {
    // setTimeout(stopVideo, 6000);
    done = true;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const $modalElement = document.querySelector(".work-example-dialog");

  $modalElement.addEventListener("modal-close-triggered", () => {
    console.log("modal close triggred");
    stopVideo();
  });
});
