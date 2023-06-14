import alunoController from "../controllers/alunoController";

export default (app) => {
  app.get('/aluno/get-all', alunoController.getAll);
  app.post('/aluno/create', alunoController.create);
  app.patch('/aluno/edit/:id', alunoController.edit);
  app.delete('/aluno/deletePessoa/:id', alunoController.deletePessoa);
}