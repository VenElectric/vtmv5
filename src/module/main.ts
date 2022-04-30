import { Kindred } from "./actor/character.js";
import { CharacterSheet } from "./actor/character-sheet.js";
import { preloadTemplates } from "./preloadTemplates.js";

const SYSTEM_NAME = "vtmv5";

Hooks.once("init", async () => {
	console.log(`${SYSTEM_NAME.toUpperCase()} | Initializing ${SYSTEM_NAME.capitalize()}`);

	game[SYSTEM_NAME] = {
		Kindred,
	};
	CONFIG.Actor.documentClass = Kindred

	Actors.unregisterSheet("core", ActorSheet);
	Actors.registerSheet("Kindred", CharacterSheet, { makeDefault: true });

	await preloadTemplates(SYSTEM_NAME);
});
