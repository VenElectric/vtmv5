import MortalBaseSheet from "./mortal-base-sheet.svelte"

export class MortalSheet extends ActorSheet {
	app: any;
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
		return `systems/vtmv5/dist/templates/mortal.hbs`;
	}

	get actorData() {
		return this.actor.data;
	}

	getData() {
		const data = super.getData();
		return data;
	}

	// Injects Svelte app when initializing HTML
	async _injectHTML(html) {
		console.log(html, "replaceHTml");
		console.log(html.find("mortal-form"))
		await super._injectHTML(html);
		this.app = new MortalBaseSheet({
			target: html.find("form")[0],
			props: {
				sheetData: this.getData() as ActorSheet.Data,
			},
		});
	}

	// Injects Svelte app when replacing innerHTML
	async _replaceHTML(element, html) {
		await super._replaceHTML(element, html);
		this.app = new MortalBaseSheet({
			target: html.find("form")[0],
			props: {
				sheetData: this.getData() as ActorSheet.Data,
			},
		});
	}
}
