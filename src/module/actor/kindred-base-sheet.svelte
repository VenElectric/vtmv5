<script lang="ts">
  export let sheetData: { actor: ActorData; data: KindredBase };
  import { LocalizationStrings, KindredBase } from "./types";
  import ProfileImage from "./components/profile-image.svelte";
  import type { ActorData } from "@league-of-foundry-developers/foundry-vtt-types/src/foundry/common/data/module.mjs";
  import DisciplineList from "./components/kindred/DisciplineList.svelte";
  import TabNav from "./components/kindred/TabNav.svelte";
  import WillPower from "./components/kindred/WillPower.svelte";
  import Health from "./components/kindred/Health.svelte";

  const { actor, data } = sheetData;
  console.log(sheetData);

  console.log(actor.token);

  const localize = (string: LocalizationStrings) =>
    (game as Game).i18n.localize(string);
</script>

<div class="standard-information">
  <div class="cage">
    <ProfileImage actorImage={actor.img} actorName={actor.name} />
    <div class="flex-row">
      <button class="roll-button" name="rouse">Rouse</button>
      <button class="roll-button" name="remorse">Remorse</button>
      <button class="roll-button" name="will">Willpower</button>
    </div>
  </div>

  <div class="flex-row">
    <div class="flex-group-center">
      <label class="resource-label" for="concept"
        >{localize(LocalizationStrings.Concept)}</label
      >
      <input
        type="text"
        id="concept"
        name="data.concept"
        bind:value={data.concept}
      />
    </div>
    <div class="flex-group-center">
      <label class="resource-label" for="predator"
        >{localize(LocalizationStrings.Predator)}</label
      >
      <input
        type="text"
        id="predator"
        name="data.predator"
        value={data.predator}
      />
    </div>
    <div class="flex-group-center">
      <label class="resource-label" for="chronicle"
        >{localize(LocalizationStrings.Chronicle)}</label
      >
      <input
        type="text"
        id="chronicle"
        name="data.chronicle"
        value={data.chronicle}
      />
    </div>
    <div class="flex-group-center">
      <label class="resource-label" for="ambition"
        >{localize(LocalizationStrings.Ambition)}</label
      >
      <input
        type="text"
        id="ambition"
        name="data.ambition"
        value={data.ambition}
      />
    </div>
    <div class="flex-group-center">
      <label class="resource-label" for="clan"
        >{localize(LocalizationStrings.Clan)}</label
      >
      <input type="text" id="clan" name="data.clan" value={data.clan} />
    </div>
    <div class="flex-group-center">
      <label class="resource-label" for="sire"
        >{localize(LocalizationStrings.Sire)}</label
      >
      <input type="text" id="sire" name="data.sire" value={data.sire} />
    </div>
    <div class="flex-group-center">
      <label class="resource-label" for="desire">
        {localize(LocalizationStrings.Desire)}
      </label>
      <input type="text" id="desire" name="data.desire" value={data.desire} />
    </div>
    <div class="flex-group-center">
      <label class="resource-label" for="generation">
        {localize(LocalizationStrings.Generation)}
      </label>
      <input
        type="text"
        id="generation"
        name="data.generation"
        value={data.generation}
      />
    </div>
  </div>
</div>

<div class="trackers-cage">
  <Health healthValue={5} />
  <WillPower willValue={5} />
</div>

<TabNav
  actorData={{
    traits: data.traits,
    disciplines: "test",
    advantages: "test",
    blood_potency: "test",
    inventory: "test",
    bio: "test",
    journal: "test",
  }}
/>

<br />

<style>
  :global(.character) {
    background: green;
  }

  :global(.character > .window-content) {
    background: blue;
  }
  :global(.cage) {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
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

  .flex-row {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    column-gap: 1em;
  }
  .standard-information {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    column-gap: 1em;
  }
  .trackers-cage {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    column-gap: 1em;
    margin-top: 2em;
  }
  .roll-button {
    background-color: #F72119;
    box-shadow: 2px 2px 3px #f72119, -2px -2px 3px red, -1px 3px 5px red, 1px -3px 4px red;
    border: 0.4em red solid;
  }
  .roll-button:hover {
    box-shadow: 2px 2px 3px rgb(116, 10, 10), -2px -2px 3px rgb(116, 10, 10), -1px 3px 5px rgb(116, 10, 10), 1px -3px 4px rgb(116, 10, 10);
  }
</style>
