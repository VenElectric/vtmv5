<script lang="ts">
  export let sheetData: { actor: ActorData; data: BaseInterface };
  import { LocalizationStrings, BaseInterface } from "./types";
  import ProfileImage from "./components/profile-image.svelte";
  import type { ActorData } from "@league-of-foundry-developers/foundry-vtt-types/src/foundry/common/data/module.mjs";

  const { actor, data } = sheetData;

  const localize = (string: LocalizationStrings) =>
    (game as Game).i18n.localize(string);
</script>

<h2>Mortal</h2>
<div class="standard-information">
  <ProfileImage actorImage={actor.img} actorName={actor.name} />
  <div class="flex-row">
    <div class="flex-group-center">
      <label class="resource-label" for="name"
        >{localize(LocalizationStrings.NAME)}</label
      >
      <input type="text" name="name" value={actor.name} />
    </div>
    <div class="flex-group-center">
      <label class="resource-label" for="concept"
        >{localize(LocalizationStrings.Concept)}</label
      >
      <input type="text" name="concept" value={data.concept} />
    </div>
    <div class="flex-group-center">
      <label class="resource-label" for="age"
        >{localize(LocalizationStrings.Age)}</label
      >
      <input type="text" name="age" value={data.true_age} />
    </div>
    <div class="flex-group-center">
      <label class="resource-label" for="ambition"
        >{localize(LocalizationStrings.Ambition)}</label
      >
      <input type="text" name="ambition" value={data.ambition} />
    </div>
    <div class="flex-group-center">
      <label class="resource-label" for="desire"
        >{localize(LocalizationStrings.Desire)}</label
      >
      <input type="text" name="desire" value={data.desire} />
    </div>
    <div class="flex-group-center">
      <label class="resource-label" for="gender"
        >{localize(LocalizationStrings.Gender)}</label
      >
      <input type="text" name="gender" value={data.gender} />
    </div>
    <div class="flex-group-center">
      <label class="resource-label" for="chronicle"
        >{localize(LocalizationStrings.Chronicle)}</label
      >
      <input type="text" name="chronicle" value={data.chronicle} />
    </div>
    <div class="flex-group-center">
      <label class="resource-label" for="desire"
        >{localize(LocalizationStrings.Demeanor)}</label
      >
      <input type="text" name="desire" value={data.demeanor} />
    </div>
    <div class="flex-group-center">
      <label class="resource-label" for="generation"
        >{localize(LocalizationStrings.Residence)}</label
      >
      <input type="text" name="generation" value={data.residence} />
    </div>
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
  .standard-information {
    display: flex;
    justify-content: space-evenly;
  }
</style>
