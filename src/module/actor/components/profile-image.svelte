<script lang="ts">
  export let actorImage;
  export let actorName;

  const filePicker = new FilePicker({
    type: "image",
    activeSource:"public",
    callback: (path: string) => {
    actorImage = path},
    field: document.getElementsByTagName("img")[0],
    button: document.getElementsByTagName("img")[0]
  });

  // filePicker.type = "image";
  // filePicker.activeSource = "data";
  // filePicker.callback = (path: string) => {
  //   actorImage = path;
  // };
  // filePicker.field = document.getElementsByTagName("img")[0]

</script>

<header class="sheet-header">
  <img
    class="profile-img"
    name="img"
    data-edit="img"
    src={actorImage}
    title={actorName}
    alt="Profile"
    width="200px"
    on:click={() => filePicker.render(true)}
  />
  <h1>
    <input type="text" name="name" value={actorName} placeholder="Name" />
  </h1>
</header>

<style>
</style>
