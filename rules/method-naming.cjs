module.exports = {
	meta: {
		type: 'Problem',
		docs: {
			description: 'Methods naming must adhere to standards',
		},
		messages: {
			snake_case: 'Methods should not be snake_case',
			uppercase: 'Methods should not be UPPERCASE',
		},
	},
	create: context => ({
		FunctionDeclaration(node) {
			if (node.id.type === 'Identifier') {
				if (node.id.name.includes('_')) {
					context.report({
						node: node.id,
						messageId: 'snake_case',
					});
				}
				if (node.id.name === node.id.name.toUpperCase()) {
					context.report({
						node: node.id,
						messageId: 'uppercase',
					});
				}
			}
		},
		VariableDeclarator(node) {
			if (
				node.id.type === 'Identifier' &&
				(node.init.type === 'FunctionExpression' || node.init.type === 'ArrowFunctionExpression')
			) {
				if (node.id.name.includes('_')) {
					context.report({
						node: node.id,
						messageId: 'snake_case',
					});
				}

				if (node.id.name === node.id.name.toUpperCase()) {
					context.report({
						node: node.id,
						messageId: 'uppercase',
					});
				}
			}
		},
	}),
};
