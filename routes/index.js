import express from 'express';
import tarefas from './tarefasRoute.js'
import swaggerUi from 'swagger-ui-express';
import swaggerData from '../swagger-output.json' assert { type: "json" };

const routes = (app) => {
    app.route('/').get((req, res) => res.status(200).send("Curso de node.js"));
    app.use(express.json(), tarefas);
    app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerData));
};

export default routes;