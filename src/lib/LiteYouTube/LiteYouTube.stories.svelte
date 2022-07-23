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
    videoTitle: { control: 'text' },
    playlistId: { control: 'text' }
  }}
/>

<Template let:args>
  <LiteYouTube {...args} />
</Template>

<Story
  name="Basic"
  args={{
    videoId: 'AdNJ3fydeao',
    videoTitle: 'Rich Harris - Rethinking reactivity'
  }}
/>

<Story
  name="With playlist"
  args={{
    videoId: 'VLrYOji75Vc',
    videoTitle: 'Speed at Scale',
    playlistId: 'PL-G5r6j4GptH5JTveoLTVqpp7w2oc27Q9'
  }}
/>
