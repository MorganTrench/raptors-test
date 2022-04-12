<script lang="ts">
  import Banner from '../../src/components/Banner.svelte';
import FeaturedPosts from "../../src/components/FeaturedPosts.svelte";
  export let posts;
</script>

<section>
  <Banner />
</section>

<section class="featured-posts">
  <div>
    <h1>Featured Posts</h1>
    <div>
      <FeaturedPosts {posts} />
    </div>
  </div>
</section>

<style lang="scss">
  section.featured-posts {
    padding: 50px;
    margin: auto;
    width: 80%;

    > div {
      > h1 {
        color: orange;
      }
      > div {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
    }
  }
</style>
