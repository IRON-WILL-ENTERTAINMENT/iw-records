import { videoData } from "../../../data/video.js";
import { setHtml } from "../utils/dom.js";

export function renderVideo() {
  setHtml(
    "video",
    `
      <div class="section-inner">
        <h2>VIDEO</h2>
        <div class="video-container">
          <iframe
            src="${videoData.youtubeEmbedUrl}"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    `
  );
}
