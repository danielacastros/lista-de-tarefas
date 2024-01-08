import chalk from "chalk";
import tarefa from "../models/tarefaModel.js";

export default class TarefaController {
    async listarTarefas(req, res) {
        try {
            const listaTarefas = await tarefa.find({});
            console.log(chalk.blueBright.bold("lista:", listaTarefas));
            res.status(200).json({ msg: "Lista de tarefas exibida com sucesso", lista: listaTarefas });
        } catch (erro) {
            res.status(500).json({ message: `Erro ao listar tarefas: ${erro.message}` });
        }
    }

    async pesquisarPorId(req, res) {
        try {
            const id = req.params.id;
            const tarefaEncontrada = await tarefa.findById(id);
            res.status(200).json({ msg: `Tarefa encontrada`, tarefaEncontrada });
        } catch (erro) {
            res.status(500).json({ message: `Erro ao buscar tarefa: ${erro.message}` });
        }
    }

    async criarTarefa(req, res) {
        try {
            const novaTarefa = await tarefa.create(req.body);
            res.status(201).json({ msg: "Tarefa criada com sucesso", tarefa: novaTarefa });
        } catch (erro) {
            res.status(500).json({ message: `Erro ao cadastrar tarefa: ${erro.message}` });
        }
    }

    async atualizarTarefa(req, res) {
        try {
            const id = req.params.id;
            const dados = req.body;
            const tarefaEncontrada = await tarefa.findByIdAndUpdate(id, dados);
            res.status(200).json({ msg: `Tarefa atualizada`, tarefaEncontrada });
        } catch (erro) {
            res.status(500).json({ message: `Erro ao atualizar tarefa: ${erro.message}` });
        }
    }

    async deletarTarefa(req, res) {
        try {
            const id = req.params.id;
            const tarefaEncontrada = await tarefa.findByIdAndDelete(id);
            res.status(200).json({ msg: "Tarefa excluída com sucesso" });
        } catch (erro) {
            res.status(500).json({ message: `Erro ao deletar tarefa: ${erro.message}` });
        }
    }

}

