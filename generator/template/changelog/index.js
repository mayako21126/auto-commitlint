/*
 * @Description: 
 * @Version: 2.0
 * @Autor: mayako
 * @Date: 2019-12-23 22:43:34
 * @LastEditors: mayako
 * @LastEditTime: 2021-03-02 16:31:30
 */
'use strict';
const Q = require(`q`);
const conventionalChangelog = require(`./conventional-changelog`);
const parserOpts = require(`./parser-opts`);
const recommendedBumpOpts = require(`./conventional-recommended-bump`);
const writerOpts = require(`./writer-opts`);
// 格式化 git log 信息
const gitRawCommitsOpts = require('./git-raw-commit');
// GitHub/GitLab 信息格式，因为 GitLab 通过 commits 无法访问到具体的记录，但 GitHub 都支持
let context = {
  commit: 'commit'
};

module.exports = Q.all([
  conventionalChangelog,
  parserOpts,
  recommendedBumpOpts,
  writerOpts,
  gitRawCommitsOpts
]).spread(
  (
    conventionalChangelog,
    parserOpts,
    recommendedBumpOpts,
    writerOpts,
    gitRawCommitsOpts
  ) => {
    return {
      context,
      conventionalChangelog,
      parserOpts,
      recommendedBumpOpts,
      writerOpts,
      gitRawCommitsOpts
    };
  }
);
