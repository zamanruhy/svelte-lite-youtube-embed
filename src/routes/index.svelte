<script lang="ts">
  import LiteYouTube from '$lib'
</script>

<LiteYouTube
  videoId="AdNJ3fydeao"
  videoTitle="Rich Harris - Rethinking reactivity"
/>

<hr />

<LiteYouTube
  videoId="VLrYOji75Vc"
  videoTitle="Speed at Scale"
  playlistId="PL-G5r6j4GptH5JTveoLTVqpp7w2oc27Q9"
  params="enablejsapi=1"
  posterQuality="hqdefault"
  on:iframeLoaded={(e) => console.log(e.detail.iframe)}
/>
