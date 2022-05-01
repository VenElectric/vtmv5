<script lang="ts">
  export let sheetData: ActorSheet.Data;
  import { LocalizationStrings, BaseInterface } from "./types";

  const mortalData = sheetData.data.data as BaseInterface;

  const localize = (string: LocalizationStrings) =>
    (game as Game).i18n.localize(string);
</script>

<h2>Mortal</h2>
<div class="flex-row">
  <div class="flex-group-center">
    <label class="resource-label" for="name"
      >{localize(LocalizationStrings.NAME)}</label
    >
    <input type="text" name="name" value={sheetData.actor.name} />
  </div>
  <div class="flex-group-center">
    <label class="resource-label" for="concept"
      >{localize(LocalizationStrings.Concept)}</label
    >
    <input type="text" name="concept" value={mortalData.concept} />
  </div>
  <div class="flex-group-center">
    <label class="resource-label" for="age"
      >{localize(LocalizationStrings.Age)}</label
    >
    <input type="text" name="age" value={mortalData.true_age} />
  </div>
  <div class="flex-group-center">
    <label class="resource-label" for="ambition"
      >{localize(LocalizationStrings.Ambition)}</label
    >
    <input type="text" name="ambition" value={mortalData.ambition} />
  </div>
  <div class="flex-group-center">
    <label class="resource-label" for="desire"
      >{localize(LocalizationStrings.Desire)}</label
    >
    <input type="text" name="desire" value={mortalData.desire} />
  </div>
  <div class="flex-group-center">
    <label class="resource-label" for="gender"
      >{localize(LocalizationStrings.Gender)}</label
    >
    <input type="text" name="gender" value={mortalData.gender} />
  </div>
  <div class="flex-group-center">
    <label class="resource-label" for="chronicle"
      >{localize(LocalizationStrings.Chronicle)}</label
    >
    <input type="text" name="chronicle" value={mortalData.chronicle} />
  </div>
  <div class="flex-group-center">
    <label class="resource-label" for="desire"
      >{localize(LocalizationStrings.Demeanor)}</label
    >
    <input type="text" name="desire" value={mortalData.demeanor} />
  </div>
  <div class="flex-group-center">
    <label class="resource-label" for="generation"
      >{localize(LocalizationStrings.Residence)}</label
    >
    <input type="text" name="generation" value={mortalData.residence} />
  </div>
</div>

<style>
  label {
    color: rgb(60, 44, 199);
    font-size: 1.2rem;
    text-transform: uppercase;
    font-weight: 100;
  }

  input {
    text-align: unset;
  }
  .flex-row {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    column-gap: 1em;
  }
</style>
