const UPPERCASE_LITERAL_CONSTANT = require('./rules/uppercase-literal-constant.cjs');
const METHOD_NAMING = require('./rules/method-naming.cjs');
const CLASS_NAMING = require('./rules/class-naming.cjs');

module.exports = {
    rules: {
        'uppercase-literal-constant': UPPERCASE_LITERAL_CONSTANT,
        'method-naming': METHOD_NAMING,
        'class-naming': CLASS_NAMING
    },
};