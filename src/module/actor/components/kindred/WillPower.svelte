<script lang="ts">
  export let willValue: number;

  function updateWill(index: number) {
    if (index <= willValue) {
      willValue = index;
    } else {
      const difference = index - willValue;
      willValue = willValue + difference;
    }
  }
</script>

<div class="will-box">
  <h3>Willpower</h3>
  <ul>
    {#each Array(15) as i, index}
      {#if willValue >= index + 1}
        <li
          on:click={() => updateWill(index + 1)}
          id={String(index + 1)}
          class="will-fill"
        />
      {:else}
        <li on:click={() => updateWill(index + 1)} id={String(index + 1)} />
      {/if}
    {/each}
  </ul>
</div>

<style>
  h3 {
    display: flex;
    align-self: center;
  }
  li {
    border: solid black;
    width: 1.5em;
    height: 1.5em;
    margin-right: 0.1em;
    margin-left: 0.1em;
  }
  ul {
    display: flex;
    list-style-type: none;
    margin-top: 0;
  }
  .will-box {
    display: flex;
    flex-direction: column;
    align-content: center;
  }
  .will-fill {
    background-color: blue;
  }
</style>
