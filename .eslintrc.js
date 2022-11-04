module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended'
  ],
  plugins: ['react-hooks'],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      modules: true
    },
    project: ['./tsconfig.json']
  },
  rules: {
    // eslint basic and prettier related rules
    'prefer-template': 'error',
    'no-console': [2, { allow: ['warn', 'error'] }],
    'max-len': [2, { code: 120, tabWidth: 2 }],
    indent: [2, 2, { SwitchCase: 1 }],
    curly: 'error',

    // React related rules
    'react/display-name': 'off',
    'react/jsx-curly-brace-presence': ['error', { props: 'never', children: 'never' }],
    'react/prop-types': 'off',
    'react/boolean-prop-naming': ['error', { rule: '^(is|has)[A-Z]([A-Za-z0-9]?)+', validateNested: true }],
    'react/destructuring-assignment': ['error', 'always', { ignoreClassFields: true }],
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function'
      }
    ],
    'react/no-access-state-in-setstate': 'error',
    'react/no-array-index-key': 'warn',
    'react/no-multi-comp': ['error', { ignoreStateless: true }],
    'react/no-unsafe': 'error',
    'react/no-unused-prop-types': 'error',
    'react/no-unused-state': 'error',
    'react/jsx-boolean-value': 'error',
    'react/jsx-closing-bracket-location': 'error',
    'react/jsx-closing-tag-location': 'error',
    'react/jsx-filename-extension': ['error', { extensions: ['.tsx'] }],
    'react/jsx-handler-names': 'error',
    'react/jsx-fragments': 'error',
    'react/jsx-max-depth': ['warn', { max: 10 }],
    'react/jsx-no-useless-fragment': 'error',
    'react/jsx-pascal-case': 'error',
    // React hooks related rules
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 'error', // Checks effect dependencies

    // Typescript related rules
    '@typescript-eslint/consistent-type-assertions': ['error', { assertionStyle: 'as' }],
    '@typescript-eslint/consistent-type-definitions': ['warn', 'interface'],
    '@typescript-eslint/explicit-function-return-type': 'warn',
    '@typescript-eslint/explicit-module-boundary-types': 'warn',
    '@typescript-eslint/member-delimiter-style': 'error',
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'function',
        format: ['PascalCase', 'camelCase']
      },
      {
        "selector": "interface",
        "format": ["PascalCase"],
        "custom": {
          "regex": "^I[A-Z]",
          "match": true
        }
      }
    ],
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-empty-function': 'warn',
    '@typescript-eslint/no-non-null-assertion': 'warn',
    '@typescript-eslint/no-require-imports': 'warn',
    '@typescript-eslint/no-type-alias': ['error', { allowAliases: 'in-unions', allowMappedTypes: 'always' }],
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
    '@typescript-eslint/no-var-requires': 'warn',
    '@typescript-eslint/ban-types': 'warn',
    '@typescript-eslint/no-unused-vars': 'warn',

    // Extension for eslint rules. Specific for TypeScript
    '@typescript-eslint/brace-style': 'error'
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
};
