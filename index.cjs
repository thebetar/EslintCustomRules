const UPPERCASE_LITERAL_CONSTANT = require('./rules/uppercase-literal-constant.cjs');
const METHOD_NAMING = require('./rules/method-naming.cjs');

module.exports = {
    rules: {
        'uppercase-literal-constant': UPPERCASE_LITERAL_CONSTANT,
        'method-naming': METHOD_NAMING,
    },
};