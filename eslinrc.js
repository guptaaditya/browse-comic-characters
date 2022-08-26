module.exports = {
    extends: ['react-app', 'react-app/jest'],
    rules: {
      'react-hooks/exhaustive-deps': 'error',
      'no-restricted-imports': [
        'warn',
        {
          patterns: [
            {
              group: ['../../*'],
              message:
                'Please consider using absolute (src-relative) imports here.',
            },
          ],
        },
      ],
      'no-duplicate-imports': 'error',
      'no-console': ['warn', { allow: ['error', 'warn'] }],
    },
    globals: {
      cy: true,
    },
  };
  