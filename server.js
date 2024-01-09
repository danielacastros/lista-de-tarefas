import express from 'express';
import chalk from 'chalk';
import conectaDatabase from './config/dbConnect.js';
import routes from './routes/index.js';
import "dotenv/config";
import cors from 'cors';

const conexao = await conectaDatabase();
conexao.on("error", (erro) => {
    console.error(chalk.red.bold("Erro de conexão", erro));
});

conexao.once("open", () => {
    console.log(chalk.hex('#A3EAD0').bold("Conexão com o banco feita com sucesso!"));
});

const port = 4000;
const app = express();
app.use(cors());
routes(app);

app.listen(port, () => {
    console.log(chalk.hex('#CCB7DA').bold(`Backend em execução na porta ${port}`));
});
