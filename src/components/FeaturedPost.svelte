<script lang="ts">
  import type { PostMetadata } from "src/routes/posts/post";
  export let post: PostMetadata;
</script>

<div class="feature-post-container">
  <img
    class="feature-post-thumbnail"
    src={post.thumbnail}
    alt="{post.title} thumbnail"
  />
  <div class="feature-post-preview-text">
    <h2>{post.title}</h2>
    <p>{post.text_preview}</p>
  </div>
</div>

<style lang="scss">
  div.feature-post-container {
    min-height: 300px;
    min-width: 400px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    padding: 5px;
    transition: background-color 0.25s;

    &:hover {
        background-color: rgb(0, 0, 0, 0.1);
    }

    img.feature-post-thumbnail {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }

    > div.feature-post-preview-text {
      > h2 {
        color: darkorange;
        margin-bottom: 0;
      }
    }
  }
</style>
