// @ts-check

const vscode = require('vscode');

/**
 * @type {(e: vscode.ExtensionContext) => void}
*/
exports.activate = function () {
	/**
	 * @type vscode.InlineCompletionItemProvider
	*/
	const provider = {
		provideInlineCompletionItems: async (document: any, position: any) => {

		}
	};

	vscode.languages.registerInlineCompletionItemProvider({ pattern: '**' }, provider);
};