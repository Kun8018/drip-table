/**
 * This file is part of the drip-table project.
 * @link     : https://drip-table.jd.com/
 * @author   : Emil Zhai (root@derzh.com)
 * @modifier : Emil Zhai (root@derzh.com)
 * @copyright: Copyright (c) 2021 JD Network Technology Co., Ltd.
 */

module.exports = {
  "extends": "stylelint-config-standard",
  "plugins": [],
  "rules": {
    "at-rule-empty-line-before": ["always", {
      except: ["inside-block", "blockless-after-same-name-blockless", "first-nested"],
      ignore: ["blockless-after-blockless"],
      ignoreAtRules: ["array", "of", "at-rules", "at-root"],
    }],
    "at-rule-no-unknown": null,
    "color-hex-length": "long",
    "comment-empty-line-before": ["always", {
      ignore: ["after-comment", "stylelint-commands"],
    }],
    "max-nesting-depth": null,
    "no-empty-source": null,
    "no-descending-specificity": null,
    "number-leading-zero": "never",
    "selector-class-pattern": [
      // Matches class name likes this: block__elem--mod or block1__elem1--mod1-block2__elem2--mod2-...
      /^(?:(weui|ant|BraftEditor)-[a-zA-Z-_]+|(?:(?:(?:^|(?!^)-)[a-z]+\d*|-[a-z]*\d+)(?:__[a-z]+\d*|__[a-z]*\d+){0,1}(?:--[a-z]+\d*|--[a-z]*\d+){0,1})*)$/u, {
        "severity": "error",
        "resolveNestedSelectors": true,
        "message": "Selector should be written in BEM style (selector-class-pattern)",
      },
    ],
    "selector-id-pattern": /^\$?[a-z][a-z0-9]*(?:-[a-z0-9]+)*$/u,
    "selector-max-compound-selectors": null,
    "selector-no-qualifying-type": null,
    "selector-pseudo-class-no-unknown": [true, {
      ignorePseudoClasses: ["global"],
    }],
  },
  "ignoreDisables": true,
};
