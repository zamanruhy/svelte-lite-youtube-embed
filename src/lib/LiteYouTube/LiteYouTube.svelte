<script lang="ts" context="module">
  // interface EventDetails {
  //   iframeLoaded: { iframe: HTMLIFrameElement }
  // }
  // type $$EVENTS = {
  //   [K in keyof EventDetails]: CustomEvent<EventDetails[K]> & { type: K }
  // }
</script>

<script lang="ts">
  import { createEventDispatcher } from 'svelte'

  type PosterQualityProp =
    | 'default'
    | 'mqdefault'
    | 'hqdefault'
    | 'sddefault'
    | 'maxresdefault'

  type PosterLoadingProp = 'lazy' | 'eager'

  interface EventDetails {
    iframeLoaded: { iframe: HTMLIFrameElement }
  }

  export let videoId: string
  export let videoPlay: string = 'Play'
  export let videoTitle: string = 'Video'
  export let params: string = ''
  export let posterQuality: PosterQualityProp = 'hqdefault'
  export let posterLoading: PosterLoadingProp = 'lazy'
  export let noCookie: boolean = true
  export let playlistId: string = ''

  let iframe: boolean = false
  let preconnected: boolean = false
  let dispatch = createEventDispatcher<EventDetails>()
  let iframeEl: HTMLIFrameElement

  $: videoId, playlistId, (iframe = false)
  $: ytUrl = noCookie
    ? 'https://www.youtube-nocookie.com'
    : 'https://www.youtube.com'
  $: iframeSrc = !playlistId
    ? `${ytUrl}/embed/${encodeURIComponent(
        videoId
      )}?autoplay=1&state=1&${params}`
    : `${ytUrl}/embed/videoseries?autoplay=1&list=${encodeURIComponent(
        playlistId
      )}&${params}`
  $: iframeEl && dispatch('iframeLoaded', { iframe: iframeEl })

  function focus(node: HTMLElement) {
    node.focus()
  }
</script>

<svelte:head>
  <link rel="preconnect" href="https://i.ytimg.com" />
  {#if preconnected}
    <link rel="preconnect" href={ytUrl} />
    <link rel="preconnect" href="https://www.google.com" />
    <link rel="preconnect" href="https://static.doubleclick.net" />
    <link rel="preconnect" href="https://googleads.g.doubleclick.net" />
  {/if}
</svelte:head>

<div
  class="lite-youtube"
  class:lite-youtube-activated={iframe}
  on:pointerover|once={() => (preconnected = true)}
  on:click={() => (iframe = true)}
>
  {#key videoId}
    <picture>
      <source
        srcset="https://i.ytimg.com/vi_webp/{videoId}/{posterQuality}.webp"
        type="image/webp"
      />
      <source
        src="https://i.ytimg.com/vi/{videoId}/{posterQuality}.jpg"
        type="image/jpeg"
      />
      <img
        class="lite-youtube-poster"
        src="https://i.ytimg.com/vi/{videoId}/{posterQuality}.jpg"
        alt="{videoPlay}: {videoTitle}"
        referrerpolicy="origin"
        loading={posterLoading}
      />
    </picture>
  {/key}
  <button
    type="button"
    class="lite-youtube-playbtn"
    aria-label="{videoPlay}: {videoTitle}"
  />
  {#if iframe}
    <iframe
      width="560"
      height="315"
      title={videoTitle}
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
      src={iframeSrc}
      bind:this={iframeEl}
      use:focus
    />
  {/if}
</div>

<style global>
  .lite-youtube {
    background-color: #000000;
    position: relative;
    display: block;
    contain: content;
    cursor: pointer;
    max-width: 720px;
  }

  /* gradient */
  .lite-youtube::before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAADGCAYAAAAT+OqFAAAAdklEQVQoz42QQQ7AIAgEF/T/D+kbq/RWAlnQyyazA4aoAB4FsBSA/bFjuF1EOL7VbrIrBuusmrt4ZZORfb6ehbWdnRHEIiITaEUKa5EJqUakRSaEYBJSCY2dEstQY7AuxahwXFrvZmWl2rh4JZ07z9dLtesfNj5q0FU3A5ObbwAAAABJRU5ErkJggg==);
    background-position: top;
    background-repeat: repeat-x;
    height: 60px;
    padding-bottom: 50px;
    width: 100%;
    transition: all 0.2s cubic-bezier(0, 0, 0.2, 1);
    box-sizing: unset;
    z-index: 1;
  }

  /* responsive iframe with a 16:9 aspect ratio
    thanks https://css-tricks.com/responsive-iframes/
*/
  .lite-youtube::after {
    content: '';
    display: block;
    padding-bottom: calc(100% / (16 / 9));
  }
  .lite-youtube > iframe {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    border: 0;
  }

  /* poster */
  .lite-youtube-poster {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    object-fit: cover;
  }

  /* play button */
  .lite-youtube > .lite-youtube-playbtn {
    width: 68px;
    height: 48px;
    position: absolute;
    cursor: pointer;
    transform: translate3d(-50%, -50%, 0);
    top: 50%;
    left: 50%;
    z-index: 1;
    background-color: transparent;
    /* YT's actual play button svg */
    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 68 48"><path fill="%23f00" fill-opacity="0.8" d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z"></path><path d="M 45,24 27,14 27,34" fill="%23fff"></path></svg>');
    filter: grayscale(100%);
    transition: filter 0.1s cubic-bezier(0, 0, 0.2, 1);
    border: none;
    outline: 0;
  }

  .lite-youtube:hover > .lite-youtube-playbtn,
  .lite-youtube .lite-youtube-playbtn:focus {
    filter: none;
  }

  /* Post-click styles */
  .lite-youtube.lite-youtube-activated {
    cursor: unset;
  }
  .lite-youtube.lite-youtube-activated::before,
  .lite-youtube.lite-youtube-activated > .lite-youtube-playbtn {
    opacity: 0;
    pointer-events: none;
  }
</style>
