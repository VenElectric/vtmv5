<script lang="ts">
  import Advantages from "./AdvantagesFlaws.svelte";
  import BioDetails from "./BioDetails.svelte";
  import DisciplineList from "./DisciplineList.svelte";
  import Inventory from "./Inventory.svelte";
  import Journal from "./Journal.svelte";
  import Statistics from "./Statistics.svelte";
  import BloodPotency from "./BloodPotency.svelte";
  export let actorData;

  let activeTab = Statistics;
  let activeData = actorData.traits;
</script>

<div>
  <nav>
    <div on:click="{() => {activeTab = Statistics; activeData = actorData.traits}}">Traits/Skills</div>
    <div on:click="{() => {activeTab = DisciplineList; activeData = actorData.disciplines}}">Disciplines/Powers</div>
    <div on:click="{() => {activeTab = Advantages; activeData = actorData.advantages}}">Advantages/Flaws</div>
    <div on:click="{() => {activeTab = BloodPotency; activeData = actorData.blood_potency}}">Blood Potency</div>
    <div on:click="{() => {activeTab = Inventory; activeData = actorData.inventory}}">Inventory</div>
    <div on:click="{() => {activeTab = BioDetails; activeData = actorData.bio}}">Biography</div>
    <div on:click="{() => {activeTab = Journal; activeData = actorData.journal}}">Journal</div>
  </nav>

  <div class="tab-container">
    <svelte:component this={activeTab} {...activeData}></svelte:component>
  </div>
</div>
