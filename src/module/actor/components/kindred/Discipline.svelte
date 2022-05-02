<script lang="ts">
  import Power from ".../power.svelte";
  export let record;
</script>

<div class="discipline-row">
  <fieldset>
    <legend>
      <span class="record-name">{record.name}</span>
      <ul>
        <li class="power-dot-x">x</li>
        {#each Array(5) as i}
          <li class="power-dot" />
        {/each}
      </ul>
    </legend>
    {#each record.power as power}
      <Power {power} />
    {/each}
  </fieldset>
</div>

<style>
  ul {
    margin-right: 0;
    margin-left: auto;
  }
  .record-name {
    margin-right: auto;
    margin-left: 0;
  }
  .power-dot {
    border-radius: 50%;
    border-color: red;
    margin-left: 0;
    margin-right: 0;
  }
  .power-dot-x {
    border-radius: 50%;
    border-color: black;
    margin-right: 0;
  }
  .discipline-row {
    display: flex;
    justify-content: space-around;
  }
</style>
