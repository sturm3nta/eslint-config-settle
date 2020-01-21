module.exports = {
  "root": true,
  "extends": ["airbnb", "plugin:prettier/recommended", "prettier/react"],
  "env": {
    "amd": true,
    "browser": true,
    "node": true,
    "jest": true
  },
  "parser": "babel-eslint",
  "settings": { "import/ignore": ["src/types/index.js"] },
  rules: {
    "-------- ↓↓↓ DISABLED ↓↓↓ -----------": "------------------------------",
    "camelcase": 0,
    "no-param-reassign": 0,
    "consistent-return": 0,
    "react/prop-types": [0],
    "no-nested-ternary": 0,
    "no-use-before-define": 0,
    "no-underscore-dangle": 0,
    "class-methods-use-this": 0,
    "import/prefer-default-export": 0,
    "react/destructuring-assignment": 0,
    "import/no-named-as-default-member": 0,

    "-------- ↓↓↓ WARNING ↓↓↓ -----------": "------------------------------",
    "eqeqeq": 1,
    "no-shadow": 1,
    "no-plusplus": 1,
    "import/no-cycle": 1,
    "no-return-assign": 1,
    "react/button-has-type": 1,
    "react/jsx-boolean-value": 1,
    "react/no-array-index-key": 1,
    "react/require-default-props": 1,
    "react/prefer-stateless-function": 1,
    "import/no-extraneous-dependencies": 1,
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],

    "-------- ↓↓↓ ERROR ↓↓↓ -----------": "------------------------------",
    "no-unused-vars": 2,
    "react/no-access-state-in-setstate": 2,
  }
};