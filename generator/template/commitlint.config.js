/*
 * @Description:
 * @Version: 2.0
 * @Autor: mayako
 * @Date: 2021-01-29 10:41:36
 * @LastEditors: mayako
 * @LastEditTime: 2021-03-02 16:59:57
 */
module.exports = {
  extends: [
    'cz'
  ],
  rules: {
    // 必须添加
    'type-empty': [2, 'never'],
    'subject-empty': [2, 'never'],
    'subject-full-stop': [0, 'never'],
    'subject-case': [0, 'never'],
    'header-max-length': [0, 'always', 72]
  }
}
