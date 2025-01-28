import sortDestructureKeys from 'eslint-plugin-sort-destructure-keys'

// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

// imported from 'eslint-plugin-vue/lib/utils/inline-non-void-elements.json'
const INLINE_ELEMENTS = ['a', 'abbr', 'audio', 'b', 'bdi', 'bdo', 'canvas', 'cite', 'code', 'data', 'del', 'dfn', 'em', 'i', 'iframe', 'ins', 'kbd', 'label', 'map', 'mark', 'noscript', 'object', 'output', 'picture', 'q', 'ruby', 's', 'samp', 'small', 'span', 'strong', 'sub', 'sup', 'svg', 'time', 'u', 'var', 'video']

export default withNuxt(
  {
    plugins: { 'sort-destructure-keys': sortDestructureKeys },
    rules: {
      /* stylistic */
      '@stylistic/indent': ['error', 2],
      '@stylistic/semi': ['error', 'never'],
      '@stylistic/arrow-parens': ['error', 'always'],
      '@stylistic/comma-dangle': ['error', 'never'],
      '@stylistic/brace-style': ['error', '1tbs'],
      '@stylistic/quote-props': ['error', 'as-needed'],
      '@stylistic/no-extra-parens': ['error', 'all'],
      '@stylistic/max-statements-per-line': ['error', { max: 2 }],

      /* typescript */
      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/no-use-before-define': 'error',
      '@typescript-eslint/no-empty-object-type': ['error', { allowInterfaces: 'always' }],
      '@typescript-eslint/unified-signatures': ['error', { ignoreDifferentlyNamedParameters: true }],

      /* vue */
      'vue/no-v-html': 'off',
      'vue/no-extra-parens': ['error', 'all'],
      'vue/no-duplicate-attr-inheritance': 'error',
      'vue/padding-line-between-blocks': 'error',
      'vue/multi-word-component-names': 'off',
      'vue/no-useless-template-attributes': 'error',
      'vue/block-order': ['error', { order: ['template', 'script', 'style'] }],
      'vue/v-for-delimiter-style': ['warn', 'in'],
      'vue/html-self-closing': ['error', {
        html: { void: 'always', normal: 'always', component: 'always' },
        svg: 'always'
      }],
      'vue/multiline-html-element-content-newline': ['error', {
        ignoreWhenEmpty: true,
        ignores: ['router-link', 'RouterLink', 'nuxt-link', 'NuxtLink', 'pre', 'textarea', ...INLINE_ELEMENTS],
        allowEmptyLines: false
      }],
      'vue/require-macro-variable-name': ['error', {
        defineProps: 'props',
        defineEmits: 'emit',
        defineSlots: 'slots',
        useSlots: 'slots',
        useAttrs: 'attrs'
      }],

      /* other */
      'require-await': 'error',
      'no-console': ['warn', { allow: ['error', 'warn'] }],

      /* QoL */
      'sort-destructure-keys/sort-destructure-keys': ['error', { caseSensitive: true }],
      'sort-imports': ['error', { ignoreDeclarationSort: true }],
      'import/order': ['error', {
        groups: [
          'builtin',
          'external',
          'internal',
          ['sibling', 'parent']
        ],
        pathGroups: [
          {
            pattern: '#*',
            group: 'external',
            position: 'after'
          },
          {
            pattern: '@/{composables,utils,lib}{,/**}',
            group: 'internal',
            position: 'after'
          }
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
        warnOnUnassignedImports: true,
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true
        }
      }]
    }
  }
)
