<script lang="ts">
  export let willPower: {
    value: number;
    superficial: number;
    aggravated: number;
  };

  //todo add feature for agg and superficial willpower

  function updateWill(index: number) {
    if (index <= willPower.value) {
      willPower.value = index;
    } else {
      const difference = index - willPower.value;
      willPower.value = willPower.value + difference;
    }
  }
</script>

<div class="will-box">
  <h3>Willpower</h3>
  <input
    type="number"
    id="willpower"
    name="data.willpower.value"
    value={willPower.value}
    style="display:none;width:1%;"
  />
  <ul>
    {#each Array(15) as i, index}
      {#if willPower.value >= index + 1}
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
