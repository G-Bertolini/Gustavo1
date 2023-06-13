import disciplinaService from "../services/disciplinaService";

async function getAll(_, res) {
  try {
    const resposta = await disciplinaService.getAll() 
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
    const resposta = await disciplinaService.create(req.body);
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
    const resposta = await disciplinaService.editDisciplinas(req.body, id);
    return res.status(200).send(resposta);
  } catch (error) {
    return res.status(500).send({
      erro: error.message
    });
  }
}

async function deleteDisciplinas(req, res) {
  try {
    const resposta = await disciplinaService.deleteDisciplinas(req.body);
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
  deleteDisciplinas,
}
