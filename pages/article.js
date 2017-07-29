import React from 'react';
import Layout from '../components/layout';
import fetch from 'isomorphic-fetch';
const url = require('../data/url');
class Article extends React.Component{
    static async getInitialProps({query}){
        let id = query;
        const res = await fetch(url.getArticleDetails + '?actId=' + id );
        const resJosn = await res.json();
        const {content} = resJosn;
        return {content:content}
    }
    render(){
        let {html,title} = this.props.content;
        return (
            <Layout title={title}>
                <link rel="stylesheet" href="/static/css/editormd.css"/>
                <link rel="stylesheet" href="/static/css/style_markdown.css"/>
                <div className="m_article_view">
                    <div className="markdown-body editormd-preview-container">
                        <article dangerouslySetInnerHTML={{__html:html}}></article>
                    </div>
                </div>
            </Layout>
        )
    }
};

export default Article;