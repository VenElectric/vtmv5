export async function preloadTemplates(system) {
	const templatePaths = [`systems/${system}/dist/templates/character.hbs`];

	return loadTemplates(templatePaths);
}
