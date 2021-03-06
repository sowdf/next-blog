const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare()
    .then(() => {
        const server = express();

        server.get('/', (req, res) => {
            return app.render(req, res, '/index', req.query)
        });

        server.get('/article/:id', (req, res) => {
            let id = req.params.id;
            return app.render(req, res, '/article', id)
        });

        server.get('*', (req, res) => {
            return handle(req, res)
        });

        server.listen(3001, (err) => {
            if (err) throw err;
            console.log('> Ready on http://localhost:3001')
        })
    });