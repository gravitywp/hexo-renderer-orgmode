'use strict';

var parser = require("org-mode-parser");

function renderer(data) {
  console.log(data);
  parser.makelist(data.path, function(nodeList) {
    console.log(nodeList);
  });
}


