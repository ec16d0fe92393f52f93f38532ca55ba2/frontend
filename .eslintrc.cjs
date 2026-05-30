module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react-hooks/recommended',
        'plugin:import/recommended',
        'plugin:import/typescript',
        'prettier',
    ],
    ignorePatterns: ['dist', '.eslintrc.cjs'],
    parser: '@typescript-eslint/parser',
    plugins: ['react-refresh', 'import', 'boundaries'],
    settings: {
        'import/resolver': {
            typescript: { project: './tsconfig.json' },
        },
        'boundaries/elements': [
            { type: 'app',      pattern: 'src/app/**' },
            { type: 'pages',    pattern: 'src/pages/**' },
            { type: 'widgets',  pattern: 'src/widgets/**' },
            { type: 'features', pattern: 'src/features/**' },
            { type: 'entities', pattern: 'src/entities/**' },
            { type: 'shared',   pattern: 'src/shared/**' },
        ],
        'boundaries/ignore': ['**/*.test.*', '**/*.spec.*'],
    },
    rules: {
        '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
        'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],

        // TypeScript handles resolution — these produce false-positives with path aliases
        'import/no-unresolved': 'off',
        'import/default': 'off',
        'import/no-named-as-default': 'off',
        'import/no-named-as-default-member': 'off',
        'import/namespace': 'off',
        'import/named': 'off',

        'import/order': [
            'warn',
            {
                groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
                pathGroups: [
                    { pattern: '@app/**',      group: 'internal', position: 'before' },
                    { pattern: '@pages/**',    group: 'internal', position: 'before' },
                    { pattern: '@widgets/**',  group: 'internal', position: 'before' },
                    { pattern: '@features/**', group: 'internal', position: 'before' },
                    { pattern: '@entities/**', group: 'internal', position: 'before' },
                    { pattern: '@shared/**',   group: 'internal', position: 'before' },
                    { pattern: '@store/**',    group: 'internal', position: 'before' },
                    { pattern: '@styles/**',   group: 'internal', position: 'before' },
                    { pattern: '@assets/**',   group: 'internal', position: 'before' },
                ],
                pathGroupsExcludedImportTypes: ['builtin'],
                'newlines-between': 'always',
            },
        ],
        'import/no-duplicates': 'warn',

        // FSD layer hierarchy enforcement
        'boundaries/dependencies': [
            'error',
            {
                default: 'disallow',
                rules: [
                    { from: 'app',      allow: ['pages', 'widgets', 'features', 'entities', 'shared'] },
                    { from: 'pages',    allow: ['widgets', 'features', 'entities', 'shared'] },
                    { from: 'widgets',  allow: ['features', 'entities', 'shared'] },
                    { from: 'features', allow: ['entities', 'shared'] },
                    { from: 'entities', allow: ['shared'] },
                    { from: 'shared',   allow: [] },
                ],
            },
        ],
    },
};