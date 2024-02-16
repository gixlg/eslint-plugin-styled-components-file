const {RuleTester} = require("eslint");
const rule = require("../../../lib/rules/import-style-file-rule.js");

const ruleTester = new RuleTester({
    // Must use at least ecmaVersion 2015 because
    // that's when `const` variables were introduced.
    "parserOptions": {
        "ecmaVersion": 2020,
        "sourceType": "module",
    },
});

// Throws error if the tests in ruleTester.run() do not pass
ruleTester.run(
    "import-style-file-rule", // rule name
    rule, // rule code
    { // checks
        // 'valid' checks cases that should pass
        valid: [{
            code: "import * as S from './ShopTheLookDrawer.styles';",
        }],
        // 'invalid' checks cases that should not pass
        invalid: [{
            code: "import { HeroMediaWrapper, Loader } from './ShopTheLookDrawer.styles';",
            output: 'import * as S from \'./ShopTheLookDrawer.styles\';',
            errors: 1,
        }],
    }
);

console.log("All tests passed!");
