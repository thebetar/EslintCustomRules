import { RuleTester } from "eslint";
import { uppercaseConstants } from "../rules/uppercase-contant.js";
import { DEFAULT_CONFIG } from "../.eslintrc.js";

const RULE_TESTER = new RuleTester(DEFAULT_CONFIG);

RULE_TESTER.run("uppercase-constants", uppercaseConstants, {
    valid: [
        {
            name: "Uppercase constant",
            code: "const CONSTANT = 1;"
        },
        {
            name: "Uppercase constant with multiple declarations",
            code: "const CONSTANT = 1, CONSTANT2 = 2;"
        }
    ],
    invalid: [
        {
            name: "Lowercase constant",
            code: "const constant = 1;",
            errors: [
                {
                    message: uppercaseConstants.meta.messages.uppercase,
                    type: "Identifier",
                }
            ]
        },
        {
            name: "PascalCase constant",
            code: "const Constant = 1;",
            errors: [
                {
                    message: uppercaseConstants.meta.messages.uppercase,
                    type: "Identifier",
                }
            ]
        },
        {
            name: "camelCase constant",
            code: "const constantName = 1;",
            errors: [
                {
                    message: uppercaseConstants.meta.messages.uppercase,
                    type: "Identifier",
                }
            ]
        }   ,
        {
            name: "snake_case constant",
            code: "const constant_name = 1;",
            errors: [
                {
                    message: uppercaseConstants.meta.messages.uppercase,
                    type: "Identifier",
                }
            ]
        },
    ]
});
