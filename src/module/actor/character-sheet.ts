import KindredBaseSheet from "./kindred-base-sheet.svelte";
import type { KindredBase } from "./types";
import type { ActorData } from "@league-of-foundry-developers/foundry-vtt-types/src/foundry/common/data/module.mjs";


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
    return this.actor.data;
  }
 
  getDataObject(): {actor: ActorData, data: KindredBase} {
    return {
      actor: this.actorData,
      data: this.actorData.toObject().data as KindredBase,
    };
  }

  // Injects Svelte app when initializing HTML
  async _injectHTML(html) {
    await super._injectHTML(html);
    this.app = new KindredBaseSheet({
      target: html.find("form")[0],
      props: {
        sheetData: this.getDataObject(),
      },
    });
  }

  // Injects Svelte app when replacing innerHTML
  async _replaceHTML(element, html) {
    console.log(element, "element")
    console.log(html, "html")
    await super._replaceHTML(element, html);
    this.app = new KindredBaseSheet({
      target: html.find("form")[0],
      props: {
        sheetData: this.getDataObject(),
      },
    });
  }
}
