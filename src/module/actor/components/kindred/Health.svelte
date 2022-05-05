<script lang="ts">
  export let healthObject: {
    value: number;
    superficial: number;
    aggravated: number;
  };

  //todo add feature for agg and superficial health

  function updateHealth(index: number) {
    if (index <= healthObject.value) {
        healthObject.value = index;
    } else {
      const difference = index - healthObject.value;
      healthObject.value = healthObject.value + difference;
    }
  }
</script>

<div class="health-box">
  <h3>Health</h3>
  <input
    type="number"
    id="health"
    name="data.health.value"
    value={healthObject.value}
    style="display:none;width:1%;"
  />
  <ul>
    {#each Array(15) as i, index}
      {#if healthObject.value >= index + 1}
        <li class="health-fill" on:click={() => updateHealth(index + 1)} />
      {:else}
        <li on:click={() => updateHealth(index + 1)} />
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
  .health-box {
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
  }
  .health-fill {
    background-color: red;
  }
</style>
