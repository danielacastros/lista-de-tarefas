# API de Gerenciamento de Tarefas (To-Do List) 📝

Esta é uma API simples para gerenciamento de tarefas, construída com Node.js e Express.

## Funcionalidades

- Criação, leitura, atualização e exclusão de tarefas (CRUD).
- Utiliza o MongoDB Atlas, serviço de banco de dados em nuvem oferecido pela MongoDB, para armazenar as informações das tarefas.
- API RESTful com rotas definidas para cada operação.



## Para utilizar o projeto siga as seguintes instruções:
1. **Configuração do Banco de Dados:**
   Configure a string de conexão de seu banco de dados no arquivo .env com a seguinte denominação: DB_CONNECTION_STRING.

2. **Instalação:**
   ```bash
   npm install

3. **Execução:**
   ```bash
   npm start

4. **Rotas da API:**

   /tarefas
   
   - GET: Obter todas as tarefas.

   /tarefas/criar
   
   - POST: Criar uma nova tarefa.
     
   /tarefas/buscar/:id

   - GET: Obter detalhes de uma tarefa específica.
  
     /tarefas/atualizar/:id
     
   - PUT: Atualizar uma tarefa existente.
     
     /tarefas/deletar/:id
     
   - DELETE: Excluir uma tarefa.

6. **Rota da documentação:**
   http://localhost:4000/docs

Próximas atividades: 
- Melhorar tratamento de erros;
- Adicionar filtros de pesquisa;
- Autenticação e autorização.
