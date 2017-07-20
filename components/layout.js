import Link from 'next/link'
import Head from 'next/head';

export default ({children,title})=>(
    <div>
        <Head>
            <title>{ title }</title>
            <meta charSet='utf-8' />
            <meta name='viewport' content='initial-scale=1.0, width=device-width' />
            <link rel="stylesheet" href="/static/css/style.css"/>
        </Head>
        { children }
    </div>
);