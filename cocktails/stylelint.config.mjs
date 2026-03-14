export default {
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-config-recess-order',
    'stylelint-prettier/recommended',
  ],
  rules: {
    // 'at-rule-no-unknown': null,
    // 'scss/at-rule-no-unknown': true,
    // 'prettier/prettier': true,

    // Разрешаем kebab-case, snake_case (одно подчеркивание) и BEM (два подчеркивания)
    // Это регулярное выражение разрешает буквы, цифры, дефисы и нижние подчеркивания
    'selector-class-pattern': '^[a-z0-9-_]+$',

    // То же самое для переменных SCSS ($my_variable, $font_Roboto)
    'scss/dollar-variable-pattern': '^[a-z0-9-_]+|[A-Z][a-z0-9]+$',

    // Если вы хотите разрешить ВООБЩЕ любые символы (включая заглавные буквы в классах)
    // 'selector-class-pattern': null,

    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true,
    'prettier/prettier': true,

    // 'no-empty-source': null,
    // или, если хотите оставить проверку для обычных .css/.scss файлов,
    // но разрешить пустые теги в .vue:
    'no-empty-source': [true, { severity: 'warning' }],
  },
  overrides: [
    {
      files: ['**/*.vue'],
      customSyntax: 'postcss-html',
    },
  ],
};
