<script lang="ts">
    import type { PostMetadata } from 'src/routes/posts/post';
    import FeaturedPost from './FeaturedPost.svelte';
    import { fade } from 'svelte/transition';
    
    export let posts: PostMetadata[];
</script>

<div class="featured-posts-container">
    {#each posts as post}
        <div class="featured-post-wrapper" in:fade>
            <FeaturedPost post={post} />
        </div>
    {/each}
</div>

<style lang="scss">
    div.featured-posts-container {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(1, 1fr);
        
        > div.featured-post-wrapper{
            margin: 10px;
        }
    }
</style>
