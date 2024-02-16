module.exports = {
    meta: {
        type: "problem",
        messages: {
            useProperImport: `Import of styled-component file {{ importDeclaration }} does not respect the standard - use "import * as S from '{{ importDeclaration }}';`,
        },
        schema: [],
        fixable: "code"
    },
    create(context) {
        return {
            ImportDeclaration(node) {
                if (node.source.value.includes("styles")) {
                    const imports = node.specifiers;
                    if (!(imports.length === 1 && imports[0].type === "ImportNamespaceSpecifier" && imports[0].local.name === "S")) {
                        context.report({
                            node: node,
                            messageId: "useProperImport",
                            data: {
                                importDeclaration: node.source.value,
                            },
                            fix: function (fixer) {
                                return fixer.replaceTextRange(node.range, `import * as S from '${node.source.value}';`);
                            },
                        });
                    }
                }
            },
        };
    },
};
