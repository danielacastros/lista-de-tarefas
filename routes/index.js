import express from 'express';
import tarefas from './tarefasRoute.js'

const routes = (app) => {
    app.route('/').get((req, res) => res.status(200).send("Curso de node.js"));
    app.use(express.json(), tarefas)
};

export default routes;