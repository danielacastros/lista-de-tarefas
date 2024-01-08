import mongoose, { mongo } from "mongoose";

const tarefaSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    titulo: { type: String},
    descricao: { type: String },
    status: { type: String }
}, { versionKey: false });

const tarefa = mongoose.model("tarefas", tarefaSchema);
console.log(tarefa)
export default tarefa;
