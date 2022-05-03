<script lang="ts">
 import Traits from "./Traits.svelte";
 export let traitValues;
 console.log(traitValues);
</script>

<div>
    <Traits traitValues={traitValues} />
</div>