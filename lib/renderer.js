'use strict';

var parser = require("org-mode-parser");

function renderer(data) {
  return new Promise(function(resolve, reject) {
    parser.makelist(data.path, function(nodeList) {
      var ofd = new parser.OrgQuery(nodeList);
      resolve(ofd.toHtml());
    });
  });
}

module.exports = renderer;
