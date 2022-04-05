<script lang="ts">
  export let posts;
</script>

<h1>Welcome to Raptors Floorball Club</h1>

<ul>
  {#each posts as { title, thumbnail }}
    <li>
        <div><span>{title}</span></div>
        <div><img src={thumbnail}></div>
    </li>
  {/each}
</ul>
