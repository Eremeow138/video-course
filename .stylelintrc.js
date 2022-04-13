/**
 * https://github.com/hudochenkov/stylelint-order
 * https://github.com/kristerkari/stylelint-scss
 * https://github.com/stylelint/stylelint
 * https://github.com/stylelint/stylelint-config-recommended
 * https://github.com/kristerkari/stylelint-config-recommended-scss
 * https://github.com/bjankord/stylelint-config-sass-guidelines
 */
module.exports = {
  plugins: [
    "stylelint-order",
    "stylelint-scss",
  ],
  extends: [
    "stylelint-config-standard",
    "stylelint-config-recommended",
    "stylelint-config-recommended-scss",
    "stylelint-config-sass-guidelines",
  ],
  rules: {
    "alpha-value-notation": "number",
    "at-rule-name-case": "lower",
    "at-rule-name-space-after": "always-single-line",
    "at-rule-semicolon-newline-after": "always",
    "at-rule-semicolon-space-before": "never",
    "at-rule-empty-line-before": ["always", {
      except: ["first-nested", "after-same-name"],
    }],
    "block-closing-brace-empty-line-before": "never",
    "block-closing-brace-newline-after": "always",
    "block-opening-brace-newline-after": "always",
    "block-opening-brace-space-after": "always-single-line",
    "color-function-notation": "modern",
    "color-hex-case": "upper",
    "comment-whitespace-inside": "always",
    "declaration-block-semicolon-newline-before": "never-multi-line",
    "declaration-colon-space-after": "always",
    "font-family-name-quotes": "always-unless-keyword",
    "font-weight-notation": ["numeric", {
      ignore: ["relative"]
    }],
    "function-comma-space-after": "always",
    "function-comma-space-before": "never",
    "function-max-empty-lines": 0,
    "function-name-case": "lower",
    "function-url-no-scheme-relative": true,
    "function-url-quotes": "always",
    "function-whitespace-after": "always",
    "hue-degree-notation": "number",
    "indentation": 2,
    "length-zero-no-unit": [true, {
      ignore: ["custom-properties"]
    }],
    "linebreaks": "unix",
    "max-line-length": 120,
    "max-nesting-depth": [
      3,
      {
        "ignoreAtRules": [
          "each",
          "media",
          "supports",
          "include"
        ]
      }
    ],
    "media-feature-colon-space-after": "always",
    "media-feature-colon-space-before": "never",
    "media-feature-name-case": "lower",
    "media-feature-range-operator-space-after": "always",
    "media-feature-range-operator-space-before": "always",
    "media-query-list-comma-space-after": "always",
    "media-query-list-comma-space-before": "never",
    "no-empty-first-line": true,
    "no-eol-whitespace": true,
    "no-invalid-position-at-import-rule": true,
    "no-unknown-animations": true,
    "number-max-precision": 2,
    "property-case": "lower",
    "property-no-unknown": [true, {
      checkPrefixed: true
    }],
    "rule-empty-line-before": ["always", {
      except: ["inside-block-and-after-rule"]
    }],
    "selector-attribute-brackets-space-inside": "never",
    "selector-attribute-operator-space-after": "never",
    "selector-attribute-operator-space-before": "never",
    "selector-attribute-quotes": "always",
    "selector-combinator-space-after": "always",
    "selector-combinator-space-before": "always",
    "selector-list-comma-space-after": "always-single-line",
    "selector-list-comma-space-before": "never",
    "selector-max-attribute": 2,
    "selector-max-class": 3,
    "selector-max-combinators": 2,
    "selector-max-empty-lines": 0,
    "selector-max-id": 2,
    "selector-max-pseudo-class": 3,
    "selector-max-type": 3,
    "selector-max-universal": 2,
    "selector-pseudo-class-case": "lower",
    "selector-pseudo-class-parentheses-space-inside": "never",
    "selector-pseudo-element-case": "lower",
    "selector-type-case": "lower",
    "string-quotes": "double",
    "unit-case": "lower",
    "value-keyword-case": "lower",
    "value-list-comma-space-after": "always",
    "value-list-comma-space-before": "never",
    "value-list-max-empty-lines": 0,

    // Специально отключенные параметры
    "font-family-no-missing-generic-family-keyword": null,
    "declaration-property-value-disallowed-list": null,
    "property-no-vendor-prefix": null,
    "selector-class-pattern": null,
    "selector-no-qualifying-type": null,
    "selector-no-vendor-prefix": null,
    "selector-descendant-combinator-no-non-space": null,
    "value-no-vendor-prefix": null,
    "order/properties-alphabetical-order": null,

    // Под вопросом
    "order/order": null,
    // Под вопросом

    "scss/selector-no-redundant-nesting-selector": null,
    "scss/no-global-function-names": null,
    // Специально отключенные параметры
  }
}
