<script lang="ts">
  export let journalData;
  export let journalEdit: boolean;
  let active = journalEdit;
</script>

<div data-item-id={journalData.id}>
  <button on:click={() => (active = !active)}>Edit</button>
  <h2>
    <input
      name="data.journal.entries"
      value={journalData.title}
      disabled={active}
    />
  </h2>
  <textarea value={journalData.entry} disabled={active} />
  {#each journalData.tags as tag}
    <span>{tag}</span>
  {/each}
</div>
