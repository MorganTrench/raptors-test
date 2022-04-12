<script lang="ts">
    let scrollY = 0;
</script>

<svelte:window bind:scrollY />

<div
class="banner-image-container"
style="background-position-y: {0.65 * scrollY - 50}px;"
>
<div class="banner-image-backdrop" />
<div class="banner-content">
  <img
    class="banner-logo"
    src="/images/logo_raptors_128.png"
    alt="Raptors Floorball Club Logo"
  />
  <div><span><b>Raptors <br/> Floorball Club</b></span></div>
</div>
</div>

<style lang="scss">
    div.banner-image-container {
      height: 600px;
      overflow: hidden;
  
      background: url("/images/banner.jpg");
  
      position: relative;
  
      display: flex;
      flex-direction: row;
      justify-content: left;
      align-items: center;
  
      > div.banner-image-backdrop {
        position: absolute;
        z-index: 0;
        height: 100%;
        width: 100%;
        backdrop-filter: blur(5px);
        -webkit-mask-image: linear-gradient(to right, white 33%, transparent);
        mask-image: linear-gradient(to right, white 33%, transparent);
        // background-image: linear-gradient(to right, white 50%, transparent);
      }
  
      > div.banner-content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        z-index: 1;
        padding: 20px;
        margin-left: 150px;
        > img.banner-logo {
          width: 256px;
          height: 256px;
        }
  
        > div > span {
          color: white;
          display: inline-block;
          text-align: center;
          width: 100%;
          font-size: xx-large;
          text-transform: uppercase;
          font-family: sans-serif;
        }
      }
    }
  
  </style>
  