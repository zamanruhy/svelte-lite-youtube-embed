# Svelte Lite YouTube Embed

**Port of Paul Irish's
[Lite YouTube Embed](https://github.com/paulirish/lite-youtube-embed) to
Svelte.**

## Install

```bash
npm install svelte-lite-youtube-embed
```

## Usage

```svelte
<script>
  import LiteYouTube from 'svelte-lite-youtube-embed'
</script>

<LiteYouTube
  videoId="AdNJ3fydeao"
  playLabel="Play: Rich Harris - Rethinking reactivity"
  params="controls=0&start=10"
/>
```
