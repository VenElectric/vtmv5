<script lang="ts">
  export let sheetData: ActorSheet.Data;
  import { LocalizationStrings, KindredBase } from "./types";

  const data = sheetData.data.data as KindredBase;
  console.log(sheetData);

  const localize = (string: LocalizationStrings) =>
    (game as Game).i18n.localize(string);
</script>

<div class="flex-row">
  <div class="flex-group-center">
    <label class="resource-label" for="name">{localize(LocalizationStrings.NAME)}</label>
    <input type="text" name="name" value={sheetData.actor.name} />
  </div>
  <div class="flex-group-center">
    <label class="resource-label" for="concept">{localize(LocalizationStrings.Concept)}</label>
    <input type="text" name="concept" value={data.concept} />
  </div>
  <div class="flex-group-center">
    <label class="resource-label" for="predator">{localize(LocalizationStrings.Predator)}</label>
    <input type="text" name="predator" value={data.predator} />
  </div>
  <div class="flex-group-center">
    <label class="resource-label" for="chronicle">{localize(LocalizationStrings.Chronicle)}</label>
    <input type="text" name="chronicle" value={data.chronicle} />
  </div>
  <div class="flex-group-center">
    <label class="resource-label" for="ambition">{localize(LocalizationStrings.Ambition)}</label>
    <input type="text" name="ambition" value={data.ambition} />
  </div>
  <div class="flex-group-center">
    <label class="resource-label" for="clan">{localize(LocalizationStrings.Clan)}</label>
    <input type="text" name="clan" value={data.clan} />
  </div>
  <div class="flex-group-center">
    <label class="resource-label" for="sire">{localize(LocalizationStrings.Sire)}</label>
    <input type="text" name="sire" value={data.sire} />
  </div>
  <div class="flex-group-center">
    <label class="resource-label" for="desire">{localize(LocalizationStrings.Desire)}</label>
    <input type="text" name="desire" value={data.desire} />
  </div>
  <div class="flex-group-center">
    <label class="resource-label" for="generation">{localize(LocalizationStrings.Generation)}</label>
    <input type="text" name="generation" value={data.generation} />
  </div>
</div>
<br />

<p class="footer">
  Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how
  to build Svelte apps.
</p>

{#each Array(5) as _, i}
  <li style="border-radius:50%" keyparams={String(i)}>Test {i}</li>
{/each}

<style>
  :global(.character) {
    background: green;
  }

  :global(.character > .window-content) {
    background: blue;
  }

  label {
    color: rgb(60, 44, 199);
    font-size: 1.2rem;
    text-transform: uppercase;
    font-weight: 100;
  }

  input {
    text-align: unset;
  }
  /* textarea {
    background: rgb(228, 7, 7);
    margin-bottom: 1rem;
  } */

  .footer {
    text-align: center;
  }

  .flex-row {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    column-gap: 1em;
  }
</style>
