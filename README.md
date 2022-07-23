# Svelte Lite YouTube Embed

**Port of Paul Irish's
[Lite YouTube Embed](https://github.com/paulirish/lite-youtube-embed) to
Svelte.**

## Install

```bash
npm install svelte-lite-youtube-embed
```

## Basic Usage

```svelte
<script>
  import LiteYouTube from 'svelte-lite-youtube-embed'
</script>

<LiteYouTube
  videoId="AdNJ3fydeao"
  videoTitle="Rich Harris - Rethinking reactivity"
/>
```

## Pro Usage

```svelte
<script>
  import LiteYouTube from 'svelte-lite-youtube-embed'
</script>

<LiteYouTube
  videoId="VLrYOji75Vc"
  videoTitle="Speed at Scale"
  playlistId="PL-G5r6j4GptH5JTveoLTVqpp7w2oc27Q9"
  params="enablejsapi=1"
  posterQuality="hqdefault"
  on:iframeLoaded={(e) => console.log(e.detail.iframe)}
/>
```

## Options & events

| Prop            |                                       Type                                       | Description                                                                                                 |
| --------------- | :------------------------------------------------------------------------------: | ----------------------------------------------------------------------------------------------------------- |
| **videoId**     |                                      string                                      | Id of the video                                                                                             |
| **videoTitle**  |                                      string                                      | Title of the video                                                                                          |
| videoPlay       |                                      string                                      | Default: `Play`. This will be added to the button label for the announcement: `"{videoPlay}: {videoTitle}"` |
| posterQuality   | string. One of `default`, `mqdefault`, `hqdefault`, `sddefault`, `maxresdefault` | Quality of the poster image                                                                                 |
| params          |                                      string                                      | Any params to pass to the URL                                                                               |
| playlistId      |                                      string                                      | Id of the playlist. Note, videoId is still needed to display the poster                                     |
| noCookie        |                                     boolean                                      | Default: `true`. Use `youtube-nocookie.com` domain (instead of `youtube.com`) to prevent cookie tracking    |
| posterLoading   |                          string. One of `lazy`, `eager`                          | Default: `lazy`. Loading attribute value of poster img element                                              |
| on:iframeLoaded |                                     function                                     | Callback that will fired when iframe loads                                                                  |

## License

[MIT License](LICENSE.md)
