import professorController from "../controllers/professorController";

export default (app) => {
  app.get('/professor/get-all', professorController.getAll);
  app.post('/professor/create', professorController.create);
  app.patch('/professor/edit/:id', professorController.edit);
  app.delete('/professor/deleteProfessor/:id', professorController.deleteProfessor);
}