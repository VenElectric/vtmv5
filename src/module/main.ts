import { Kindred } from "./actor/character";
import { CharacterSheet } from "./actor/character-sheet";
import { CoterieSheet } from "./actor/coterie-sheet";
import { MortalSheet } from "./actor/mortal-sheet";
import { GhoulSheet } from "./actor/ghoul-sheet";
import { preloadTemplates } from "./preloadTemplates";
import "svelte";

const SYSTEM_NAME = "vtmv5";

Hooks.once("init", async () => {
	console.log(`${SYSTEM_NAME.toUpperCase()} | Initializing ${SYSTEM_NAME.capitalize()}`);

	game[SYSTEM_NAME] = {
		Kindred
	};
	CONFIG.Actor.documentClass = Kindred;

	Actors.unregisterSheet("core", ActorSheet);
	Actors.registerSheet("vtmv5", CharacterSheet, { label: 'Kindred Sheet', types: ["kindred","character"], makeDefault: true });
	Actors.registerSheet("vtmv5", CoterieSheet, { label: 'Coterie', types: ["coterie"], makeDefault: true });
	Actors.registerSheet("vtmv5", MortalSheet, { label: 'Mortal', types: ["touchstone", "mortal"], makeDefault: true });
	Actors.registerSheet("vtmv5", GhoulSheet, { label: 'Ghoul', types: ["ghoul"], makeDefault: true });

	await preloadTemplates(SYSTEM_NAME);
});
