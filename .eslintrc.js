// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,

    ////////////////
    // our custom stuff
    "quotes": "off",
    "comma-dangle": "off",
    "spaced-comment": "off",
    "keyword-spacing": "warn",
    "space-before-blocks": "off",
    "no-param-reassign": "off",
    "object-curly-spacing": "off",
    "comma-spacing": "off",
    "no-plusplus": "off",
    "no-unreachable": "warn",
    "padded-blocks": "off",
    "no-unused-vars": "warn",
    "prefer-const": "warn",
    "no-tabs": "off",
    "no-console": "off",
    "prefer-template": "off",
    "no-useless-escape": "off",
    "no-multi-assign": "off",
    "max-len": ["error", 140],
    "semi": "off",
    "func-names": "off",
    "no-use-before-define": "off",
    "quote-props": "off",
    "prefer-rest-params": "warn",
    "object-shorthand": "warn",
    "no-trailing-spaces": "warn",
    "no-bitwise": "off"
  }
};
