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
        let {content,title} = this.props.content;
        return (
            <Layout title={title}>
                <div className="m_article_view">
                    <article dangerouslySetInnerHTML={{__html:content}}>
                    </article>
                </div>
            </Layout>
        )
    }
};

export default Article;