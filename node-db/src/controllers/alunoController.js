import alunoService from "../services/alunoService";

async function getAll(_, res) {
  try {
    const resposta = await alunoService.getAll() 
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
    const resposta = await alunoService.create(req.body);
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
    const resposta = await alunoService.editAluno(req.body, id);
    return res.status(200).send(resposta);
  } catch (error) {
    return res.status(500).send({
      erro: error.message
    });
  }
}

async function deletePessoa(req, res) {
  try {
    const resposta = await alunoService.deletePessoa(req.body);
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
  deletePessoa,
}
