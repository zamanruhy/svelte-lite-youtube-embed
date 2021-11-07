<script>
  import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
  import LiteYouTube from './LiteYouTube.svelte'
</script>

<!-- 👇 Creates specific parameters for the story -->
<Meta
  title="Components/LiteYouTube"
  component={LiteYouTube}
  argTypes={{
    videoId: { control: 'text' },
    playLabel: { control: 'text' },
    params: { control: 'text' }
  }}
/>

<Template let:args>
  <LiteYouTube {...args} />
</Template>

<Story
  name="Without params"
  args={{
    videoId: 'ogfYd705cRs',
    playLabel: `Play: Keynote (Google I/O '18)`
  }}
/>

<Story
  name="With params"
  args={{
    videoId: 'AdNJ3fydeao',
    playLabel: 'Play: Rich Harris - Rethinking reactivity',
    params: 'controls=0&start=10&end=30&modestbranding=2&rel=0&enablejsapi=1'
  }}
/>
