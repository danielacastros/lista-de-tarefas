import express, { Router } from 'express';
import TarefaController from '../controllers/tarefaController.js';

const router = Router();
const ctrl = new TarefaController();

router.get('/tarefas', ctrl.listarTarefas);
router.get('/tarefas/buscar/:id', ctrl.pesquisarPorId)
router.post('/tarefas/criar', ctrl.criarTarefa);
router.put('/tarefas/atualizar/:id', ctrl.atualizarTarefa);
router.delete('/tarefas/deletar/:id', ctrl.deletarTarefa);

export default router;