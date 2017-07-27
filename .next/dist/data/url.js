'use strict';

var HOST = require('./host');
var url = {
    getArticleList: HOST.SERVER_HOST + '/api/article-list',
    getArticleDetails: HOST.SERVER_HOST + '/api/article-view'
};

module.exports = url;