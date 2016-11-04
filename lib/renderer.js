'use strict';

var parser = require("org-mode-parser");
var util = require("hexo-util");
var cheerio = require("cheerio");

function renderer(data) {
  return new Promise(function(resolve, reject) {
    parser.makelist(data.path, function(nodeList) {
      var ofd = new parser.OrgQuery(nodeList);
      var html = ofd.toHtml();

      //code highlight
      var $ = cheerio.load(html, {
        ignoreWhitespace: false,
        xmlMode: false,
        lowercaseTags: false
      });
      $("code").each(function(i, el) {
        var lang = el.attribs["data-language"];
        var $el = $(this);
        $el.replaceWith(util.highlight($el.text(), {lang: lang}));
      });


      resolve($.html());
    });
  });
}

module.exports = renderer;
