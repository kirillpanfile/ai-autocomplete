import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	console.log('Congratulations, your extension "ai-autocomplete" is now active!');
	let disposable = vscode.commands.registerCommand('ai-autocomplete.helloWorld', () => {
		vscode.window.showInformationMessage('Hello World from ai-autocomplete!');
	});

	context.subscriptions.push(disposable);
}
export function deactivate() { }
