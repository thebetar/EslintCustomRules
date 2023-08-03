module.exports = {
	meta: {
		type: 'Problem',
		docs: {
			description: 'Classes should be PascalCase',
		},
		messages: {
			pascalcase: "'{{ name }}': Class name should be PascalCase",
		},
	},
	create: context => ({
		ClassDeclaration(node) {
			if (node.id.type === 'Identifier') {
				if (
					node.id.name !== node.id.name.charAt(0).toUpperCase() &&
					node.id.name.length > 1 &&
					!node.id.name.includes('_')
				) {
					context.report({
						node: node.id,
						data: {
							name: node.id.name,
						},
						messageId: 'pascalcase',
					});
				}
			}
		},
	}),
};
