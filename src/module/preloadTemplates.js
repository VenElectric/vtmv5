export async function preloadTemplates(system) {
	const templatePaths = [`systems/${system}/dist/templates/kindred.hbs`,`systems/${system}/dist/templates/mortal.hbs`];

	return loadTemplates(templatePaths);
}
