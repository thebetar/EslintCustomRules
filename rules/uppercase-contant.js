export const uppercaseConstants = {
    meta: {
        type: "Problem",
        docs: {
            description: "Constants are unchanging to better display this they should be uppercase",
        },
        messages: {
            uppercase: "Constants should be uppercase",
        }
    },
    create: context => ({
        VariableDeclaration(node) {
            if (node.kind === "const") {
                node.declarations.forEach(declaration => {
                    if (declaration.id.type === "Identifier") {
                        if (declaration.id.name !== declaration.id.name.toUpperCase()) {
                            context.report({
                                node: declaration.id,
                                messageId: "uppercase",
                            });
                        }
                    }
                });
            }
        }
    })
}
