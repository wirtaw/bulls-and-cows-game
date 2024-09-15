module.exports = {
  env: {
    browser: true, // Enable browser globals like 'window', 'document'
    es2021: true, // Enable ES2021 features
    node: true // Enable Node.js globals
  },
  extends: [
    'eslint:recommended', // Base ESLint rules
    'plugin:vue/vue3-recommended', // Vue 3 specific rules,
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  parserOptions: {
    ecmaVersion: 'latest', // Use the latest ECMAScript version
    sourceType: 'module' // Enable ES modules
  },
  rules: {
    // Add your custom rules here if needed
  },
  overrides: [
    {
      files: ['*.vue'], // Lint Vue single-file components
      parser: 'vue-eslint-parser', // Use the Vue parser
      parserOptions: {
        parser: '@babel/eslint-parser', // If using advanced JS features in Vue components
        requireConfigFile: false, 
      }
    },
    {
      files: ['*.js', '*.cjs'] // Lint JavaScript and CommonJS files
      // Additional rules for JS/CJS files can go here if needed
    }
  ],

  ignorePatterns: [
    '.gitignore',
    'node_modules/', // Ignore the 'node_modules' directory
    'dist/', // Ignore the 'dist' or build output directory
    '*.config.js' // Ignore config files (adjust as needed)
  ]
}
