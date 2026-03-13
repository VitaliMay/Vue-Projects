import pluginVue from 'eslint-plugin-vue';
import vueConfigPrettier from '@vue/eslint-config-prettier';

export default [
  {
    name: 'app/files-to-ignore',
    ignores: ['**/dist/**', '**/node_modules/**', '**/public/**'],
  },
  ...pluginVue.configs['flat/essential'],
  vueConfigPrettier,
  {
    rules: {
      'vue/multi-word-component-names': 'off',
      // 'no-unused-vars': 'error', //неиспользуемые переменные
      // Настройка для JS/TS файлов:
      quotes: ['error', 'single'],
      'prettier/prettier': [
        'error',
        {
          singleQuote: true,
          semi: true,
          trailingComma: 'all',
          endOfLine: 'auto',
        },
      ],
    },
  },
];
