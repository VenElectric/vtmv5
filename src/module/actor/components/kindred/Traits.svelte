<script lang="ts">
  import { TraitTypes } from "../../TraitsTypes";
  export let traitValues;

  function updateTraitValue(index: number, trait: TraitTypes) {
    const value = index + 1;
    const toLowerTrait = trait.toLowerCase()
    if (value <= traitValues[trait]) {
      traitValues[trait] = value;
    } else {
      const difference = value - traitValues[toLowerTrait];
      traitValues[toLowerTrait] = traitValues[toLowerTrait] + difference;
    }
  }
</script>

<div class="trait-cage">
  <div class="trait-flex">
    <span>{TraitTypes.Strength}</span>
    <input type="number" id="strength" name="data.traits.strength" value={traitValues.strength} style="display:none;width:1%;" />
    <ul>
      <li class="trait-x">x</li>
      {#each Array(7) as i, index}
        {#if traitValues[TraitTypes.Strength.toLowerCase()] >= index + 1}
          <li
            class="trait-fill"
            data-index={this}
            on:click={() => updateTraitValue(index, TraitTypes.Strength)}
          />
        {:else}
          <li on:click={() => updateTraitValue(index, TraitTypes.Strength)} />
        {/if}
      {/each}
    </ul>
  </div>
  <div class="trait-flex">
    <span>{TraitTypes.Dexteriy}</span>
    <input type="number" id="dexterity" name="data.traits.dexterity" value={traitValues.dexterity} style="display:none;width:1%;" />
    <ul>
      <li class="trait-x">x</li>
      {#each Array(7) as i, index}
        {#if traitValues[TraitTypes.Dexteriy.toLowerCase()] >= index + 1}
          <li
            class="trait-fill"
            on:click={() => updateTraitValue(index, TraitTypes.Dexteriy)}
          />
        {:else}
          <li on:click={() => updateTraitValue(index, TraitTypes.Dexteriy)} />
        {/if}
      {/each}
    </ul>
  </div>
  <div class="trait-flex">
    <span>{TraitTypes.Stamina}</span>
    <input type="number" id="stamina" name="data.traits.stamina" value={traitValues.stamina} style="display:none;width:1%;" />
    <ul>
      <li class="trait-x">x</li>
      {#each Array(7) as i, index}
        {#if traitValues[TraitTypes.Stamina.toLowerCase()] >= index + 1}
          <li
            class="trait-fill"
            on:click={() => updateTraitValue(index, TraitTypes.Stamina)}
          />
        {:else}
          <li on:click={() => updateTraitValue(index, TraitTypes.Stamina)} />
        {/if}
      {/each}
    </ul>
  </div>
  <div class="trait-flex">
    <span>{TraitTypes.Charisma}</span>
    <input type="number" id="charisma" name="data.traits.charisma" value={traitValues.charisma} style="display:none;width:1%;" />
    <ul>
      <li class="trait-x">x</li>
      {#each Array(7) as i, index}
        {#if traitValues[TraitTypes.Charisma.toLowerCase()] >= index + 1}
          <li
            class="trait-fill"
            on:click={() => updateTraitValue(index, TraitTypes.Charisma)}
          />
        {:else}
          <li on:click={() => updateTraitValue(index, TraitTypes.Charisma)} />
        {/if}
      {/each}
    </ul>
  </div>
  <div class="trait-flex">
    <span>{TraitTypes.Composure}</span>
    <input type="number" id="composure" name="data.traits.composure" value={traitValues.composure} style="display:none;width:1%;" />
    <ul>
      <li class="trait-x">x</li>
      {#each Array(7) as i, index}
        {#if traitValues[TraitTypes.Composure.toLowerCase()] >= index + 1}
          <li
            class="trait-fill"
            on:click={() => updateTraitValue(index, TraitTypes.Composure)}
          />
        {:else}
          <li on:click={() => updateTraitValue(index, TraitTypes.Composure)} />
        {/if}
      {/each}
    </ul>
  </div>
  <div class="trait-flex">
    <span>{TraitTypes.Manipulation}</span>
    <input type="number" id="manipulation" name="data.traits.manipulation" value={traitValues.manipulation} style="display:none;width:1%;" />
    <ul>
      <li class="trait-x">x</li>
      {#each Array(7) as i, index}
        {#if traitValues[TraitTypes.Manipulation.toLowerCase()] >= index + 1}
          <li
            class="trait-fill"
            on:click={() => updateTraitValue(index, TraitTypes.Manipulation)}
          />
        {:else}
          <li
            on:click={() => updateTraitValue(index, TraitTypes.Manipulation)}
          />
        {/if}
      {/each}
    </ul>
  </div>
  <div class="trait-flex">
    <span>{TraitTypes.Intelligence}</span>
    <input type="number" id="intelligence" name="data.traits.intelligence" value={traitValues.intelligence} style="display:none;width:1%;" />
    <ul>
      <li class="trait-x">x</li>
      {#each Array(7) as i, index}
        {#if traitValues[TraitTypes.Intelligence.toLowerCase()] >= index + 1}
          <li
            class="trait-fill"
            on:click={() => updateTraitValue(index, TraitTypes.Intelligence)}
          />
        {:else}
          <li
            on:click={() => updateTraitValue(index, TraitTypes.Intelligence)}
          />
        {/if}
      {/each}
    </ul>
  </div>
  <div class="trait-flex">
    <span>{TraitTypes.Wits}</span>
    <input type="number" id="wits" name="data.traits.wits" value={traitValues.wits} style="display:none;width:1%;" />
    <ul>
      <li class="trait-x">x</li>
      {#each Array(7) as i, index}
        {#if traitValues[TraitTypes.Wits.toLowerCase()] >= index + 1}
          <li
            class="trait-fill"
            on:click={() => updateTraitValue(index, TraitTypes.Wits)}
          />
        {:else}
          <li on:click={() => updateTraitValue(index, TraitTypes.Wits)} />
        {/if}
      {/each}
    </ul>
  </div>
  <div class="trait-flex">
    <span>{TraitTypes.Resolve}</span>
    <input type="number" id="resolve" name="data.traits.resolve" value={traitValues.resolve} style="display:none;width:1%;" />
    <ul>
      <li class="trait-x">x</li>
      {#each Array(7) as i, index}
        {#if traitValues[TraitTypes.Resolve.toLowerCase()] >= index + 1}
          <li
            class="trait-fill"
            on:click={() => updateTraitValue(index, TraitTypes.Resolve)}
          />
        {:else}
          <li on:click={() => updateTraitValue(index, TraitTypes.Resolve)} />
        {/if}
      {/each}
    </ul>
  </div>
</div>

<style>
  ul {
    display: flex;
    list-style-type: none;
    margin-top: 0;
  }
  .radio-test {
    display: flex;
    margin-top: 0;
  }
  .trait-cage {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    column-gap: 1em;
  }
  li {
    border: solid black;
    width: 1.5em;
    height: 1.5em;
    margin-right: 0.1em;
    margin-left: 0.1em;
    border-radius: 50%;
  }
  .trait-x {
    text-align: center;
  }
  .trait-fill {
    background-color:black;
  }
  .trait-flex {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0.2em;
  }
</style>
