import KindredBaseSheet from "./kindred-base-sheet.svelte";
import type { KindredBase } from "./types";

export class CharacterSheet extends ActorSheet {
  app: any;
  data: KindredBase;
  constructor(actor, options) {
    super(actor, options);
    this.app = null;
  }

  /** @override */
  static get defaultOptions() {
    return mergeObject(super.defaultOptions, {
      classes: ["vtmv5", "sheet", "actor", "kindred"],
    });
  }

  /** @override */
  get template() {
    return `systems/vtmv5/dist/templates/kindred.hbs`;
  }

  get actorData() {
    console.log(this.actor.data);
    return this.actor.data;
  }

  getData() {
    const data = super.getData();
    console.log(data);
    return data;
  }

  // Injects Svelte app when initializing HTML
  async _injectHTML(html) {
    await super._injectHTML(html);
    this.app = new KindredBaseSheet({
      target: html.find("form")[0],
      props: {
        sheetData: this.getData() as ActorSheet.Data,
      },
    });
  }

  // Injects Svelte app when replacing innerHTML
  async _replaceHTML(element, html) {
    await super._replaceHTML(element, html);
    this.app = new KindredBaseSheet({
      target: html.find("form")[0],
      props: {
        sheetData: this.getData() as ActorSheet.Data,
      },
    });
  }
}
