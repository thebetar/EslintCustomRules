export const UPPERCASE_LITERAL_CONSTANT = {
	meta: {
		type: 'Problem',
		docs: {
			description: 'Constants are unchanging to better display this they should be uppercase',
		},
		messages: {
			uppercase: 'Constants with a literal value should be uppercase',
		},
	},
	create: context => ({
		VariableDeclaration(node) {
			if (node.kind === 'const') {
				node.declarations.forEach(declaration => {
					if (
						declaration.id.type === 'Identifier' &&
						declaration.id.type === 'Identifier' &&
						declaration.init.type !== 'ArrowFunctionExpression' &&
						declaration.init.type !== 'FunctionExpression'
					) {
						if (declaration.id.name !== declaration.id.name.toUpperCase()) {
							context.report({
								node: declaration.id,
								messageId: 'uppercase',
							});
						}
					}
				});
			}
		},
	}),
};
