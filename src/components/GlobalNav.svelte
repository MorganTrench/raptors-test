<script lang="ts">
</script>

<nav>
  <div class="nav-links">
    <ul>
      <li><span>Home</span></li>
      <li><span>News</span></li>
      <li><span>The Club</span></li>
      <li><span>Player Registration</span></li>
      <li><span>Contact Us</span></li>
    </ul>
  </div>
  <div class="socials" />
</nav>

<style lang="scss">
  nav {
    display: flex;
    background-color: #232323;
    height: 52px;
    align-items: center;
    justify-content: space-around;

    > div.nav-links {
      margin: 0;
      color: white;

      > ul {
        margin: 0;
        padding: 0;
        display: flex;

        > li {
          padding: 1em;
          padding-right: 0em;
          list-style: none;
        }

        > li > span {
          padding: 1em;
          padding-left: 0em;
          transition: color 0.15s;
        }

        > li:hover > span {
          color: orange;
        }

        > li::after {
          border-right: 1px solid rgba(255, 255, 255, 0.5);
          height: 1.2em;
          content: "";
        }

        > li:last-child:after {
          display: none;
        }
      }
    }
  }
</style>
