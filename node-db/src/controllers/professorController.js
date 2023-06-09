import professorService from "../services/professorService";

async function getAll(_, res) {
  try {
    const resposta = await professorService.getAll() 
    return res.status(200).send({
      message: 'Busca com sucesso!',
      data: resposta
    });
  } catch (error) {
    return res.status(500).send({
      erro: error.message
    });
  }
}

async function create(req, res) {
  try {
    const resposta = await professorService.create(req.body);
    return res.status(200).send(resposta);
  } catch (error) {
    return res.status(500).send({
      erro: error.message
    });
  }
}

async function edit(req, res) {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).send({
        message: 'Campo Inválido'
      });
    }
    const resposta = await professorService.editProfessor(req.body, id);
    return res.status(200).send(resposta);
  } catch (error) {
    return res.status(500).send({
      erro: error.message
    });
  }
}

async function deleteProfessor(req, res) {
  try {
    const resposta = await professorService.deleteProfessor(req.body);
    return res.status(200).send(resposta);
  } catch (error) {
    return res.status(500).send({
      erro: error.message
    });
  }
}

export default {
  getAll,
  create,
  edit,
  deleteProfessor,
}
