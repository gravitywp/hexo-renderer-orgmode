'use strict';
var renderer = require('./lib/renderer');
var assign = require('object-assign');

// Init option
hexo.config.org = assign({
}, hexo.config.org);

hexo.extend.renderer.register('org', 'html', renderer.bind(hexo), false);

// hexo.extend.filter.register('before_post_render', read_info);
