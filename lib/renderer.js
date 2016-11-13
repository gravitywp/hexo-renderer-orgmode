'use strict';

var parser = require("org-mode-parser");
var util = require("hexo-util");
var _ = require("lodash");

function renderer(data) {
  return new Promise(function(resolve, reject) {
    parser.makelist(data.path, function(nodeList) {
      var ofd = new parser.OrgQuery(nodeList);
      var html = ofd.toHtml();
      var matches = html.replace(/(<code.*?data-language="(.*)".*?>\n([\s\S]*?)\n<\/code>)+/g, function(match, group, lang, code){
        return util.highlight(code, {lang: lang});
      });
      resolve(matches);
    });
  });
}

module.exports = renderer;
