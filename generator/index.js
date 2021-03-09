/*
 * @Description: 
 * @Version: 2.0
 * @Autor: mayako
 * @Date: 2019-12-23 22:43:34
 * @LastEditors: mayako
 * @LastEditTime: 2021-03-04 17:20:04
 */
module.exports = (api, option) => {
  if (option.replace) {
    api.render('./template');
    api.extendPackage({
      "scripts": {
        "commit": "cz",
        "release": "./release.sh",
        "changelog": "conventional-changelog --config ./changelog -i CHANGELOG.md -s -r 0 && git add CHANGELOG.md &&git commit -m 'docs(global): update changelog'"
      },
      "repository": {
        "type": "git",
        "url": "git+https://gitlab.daocloud.cn/openapi/openapi-tenant-frontend.git"
      },
      "bugs": {
        "url": "https://jira.daocloud.io/browse"
      },
      "homepage": "https://gitlab.daocloud.cn/openapi/openapi-tenant-frontend/#readme",
      "husky": {
        "hooks": {
          "prepare-commit-msg": "exec < /dev/tty && git cz --hook || true",
          "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
        }
      },
      "changelog": {
        "authorName": true,
        "authorEmail": true
      },
      "config": {
        "commitizen": {
          "path": "./node_modules/cz-customizable"
        },
        "cz-customizable": {
          "config": ".cz-config.js"
        }
      },
      "devDependencies": {
        "commitizen": "^4.0.3",
        "@commitlint/cli": "^11.0.0",
        "@commitlint/config-conventional": "^11.0.0",
        "commitlint-config-cz": "^0.13.2",
        "cz-customizable": "^6.3.0",
        "standard-version": "^9.1.1",
        "husky": "^4.3.8",
      },
      "standard-version": {
        "scripts": {
          "precommit": "npm run changelog"
        },
        "skip": {
          "changelog": true
        }
      }
    })
    console.log('添加 auto-commitlint成功！')
  } else {
    console.log('添加 auto-commitlint失败！')
  }
}
