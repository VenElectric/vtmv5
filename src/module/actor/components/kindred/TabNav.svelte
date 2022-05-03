<script lang="ts">
  import Advantages from "./AdvantagesFlaws.svelte";
  import BioDetails from "./BioDetails.svelte";
  import DisciplineList from "./DisciplineList.svelte";
  import Inventory from "./Inventory.svelte";
  import Journal from "./Journal.svelte";
  import Statistics from "./Statistics.svelte";
  import BloodPotency from "./BloodPotency.svelte";
import type { SvelteComponent } from "svelte";
  export let actorData;
  console.log(actorData.traits)
  let activeTab: any = Statistics;
  let activeData = {traitValues:actorData.traits}
</script>

<div class="tab-cage">
  <nav>
    <div class="nav-link" on:click="{() => {activeTab = Statistics; activeData = {traitValues:actorData.traits}}}">Traits<br />Skills</div>
    <div class="nav-link" on:click="{() => {activeTab = DisciplineList; activeData = actorData.disciplines}}">Disciplines<br/>Powers</div>
    <div class="nav-link" on:click="{() => {activeTab = Advantages; activeData = actorData.advantages}}">Advantages<br />Flaws</div>
    <div class="nav-link" on:click="{() => {activeTab = BloodPotency; activeData = actorData.blood_potency}}">Blood Potency</div>
    <div class="nav-link" on:click="{() => {activeTab = Inventory; activeData = actorData.inventory}}">Inventory</div>
    <div class="nav-link" on:click="{() => {activeTab = BioDetails; activeData = actorData.bio}}">Biography</div>
    <div class="nav-link" on:click="{() => {activeTab = Journal; activeData = actorData.journal}}">Journal</div>
  </nav>

  <div class="tab-container">
    <svelte:component this={activeTab} {...activeData}></svelte:component>
  </div>
</div>

<style>
  nav {
    display: grid;
    grid-template-columns: repeat(7, minmax(0, 1fr));
    column-gap: 1em;
  }
  .nav-link {
    display: flex;
    flex-direction: column;
    border: solid black;
    padding: 0.5em;
    text-align: center;
    align-content: center;
    justify-content: center;
    background-color: #F72119;
    box-shadow: 2px 2px 3px #f72119, -2px -2px 3px red, -1px 3px 5px red, 1px -3px 4px red;
    border: 0.4em red solid;
    font-weight: bold;
  }
  .nav-link:hover {
    box-shadow: 2px 2px 3px rgb(116, 10, 10), -2px -2px 3px rgb(116, 10, 10), -1px 3px 5px rgb(116, 10, 10), 1px -3px 4px rgb(116, 10, 10);
  }
  .tab-container {
    width: 100%;
    border: solid red;
    border-radius: 1em;
    margin-top: 2em;
    padding: 1em;
  }
  .tab-cage {
    display: flex;
    flex-direction: column;
    align-content: center;
    margin-top: 2em;
  }
</style>
