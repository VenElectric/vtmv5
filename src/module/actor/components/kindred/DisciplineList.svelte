<script lang="ts">
    import Discipline from "./kindred/Discipline.svelte";
    export let actorDisciplines;
</script>

{#each actorDisciplines as record}

<Discipline record={record}></Discipline>
{/each}



