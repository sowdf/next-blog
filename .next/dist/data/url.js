'use strict';

var HOST = require('./host');
var url = {
    getArticleList: HOST.SERVER_HOST + '/api/article-list'
};

module.exports = url;