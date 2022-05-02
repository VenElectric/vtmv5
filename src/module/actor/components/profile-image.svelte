<script lang="ts">
  export let actorImage;
  export let actorName;


  const filePicker = new FilePicker({
    type: "image",
    activeSource: "data",
    callback: () => {
      (path: string) => {
        actorImage = path;
      };
    },
  });
</script>

<header class="sheet-header">
  <img
    class="profile-img"
    data-edit="img"
    data-type="image"
    src={actorImage}
    title={actorName}
    alt="Profile"
    width="200px"
    on:click={() => filePicker.render()}
  />
  <h1>
    <input type="text" name="name" value={actorName} placeholder="Name" />
  </h1>
</header>

<style>
</style>
