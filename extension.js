// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

export function activate(_) {

	const provider = {
		provideInlineCompletionItems: async (document, position, context, token) => {

		}
	};

	vscode.languages.registerInlineCompletionItemProvider({ pattern: "**" }, provider);
}

