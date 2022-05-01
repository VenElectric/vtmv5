<script lang="ts">
  export let sheetData: ActorSheet.Data;
  import { LocalizationStrings } from "./types";
  
  const data = sheetData.data
  console.log(sheetData);
  
  const localize = (string: LocalizationStrings) => (game as Game).i18n.localize(string);

</script>

  <div>
    <label for="name">{localize(LocalizationStrings.NAME)}</label>
    <input type="text" name="name" value="{sheetData.actor.name}" />
    <label for="concept">{localize(LocalizationStrings.Concept)}</label>
    <input type="text" name="concept" value="{data.concept}" />
    <label>{localize(LocalizationStrings)}</label>
    <input type="text" name="" value="{data.}" />
    <label>{localize(LocalizationStrings)}</label>
    <input type="text" name="" value="{data.}" />
    <label>{localize(LocalizationStrings)}</label>
    <input type="text" name="" value="{data.}" />
    <label>{localize(LocalizationStrings)}</label>
    <input type="text" name="" value="{data.}" />
    <label>{localize(LocalizationStrings)}</label>
    <input type="text" name="" value="{data.}" />
    <label><{localize(LocalizationStrings)}/label>
    <input type="text" name="" value="{data.}" />
    <label>{localize(LocalizationStrings)}</label>
    <input type="text" name="" value="{data.}" />
  </div>
	<label for="name">{localize(LocalizationStrings.NAME)}</label>
	<input type="text" name="name" value="{sheetData.actor.name}"/>

  <label for="health">{localize(LocalizationStrings.Health)}</label>
  <input
    type="text"
    id="health"
    name="Health Value"
  />

  <label for="power">{localize(LocalizationStrings.Desire)}</label>
  <input
    type="text"
    id="power"
    name="Power Value"
  />

  <label for="biography">{localize(LocalizationStrings.Ambition)}</label>
  <textarea id="biography" name="data.biography" />

  <br />

  <p class="footer">
    Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn
    how to build Svelte apps.
  </p>

  {#each Array(5) as _, i}
    <li style="border-radius:50%" keyparams="{String(i)}">Test {i}</li>
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

  input,
  textarea {
    background: rgb(228, 7, 7);
    margin-bottom: 1rem;
  }

  .footer {
    text-align: center;
  }

</style>
