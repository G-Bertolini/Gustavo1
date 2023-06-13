import infosService from "../services/infosService";

async function getMedia(_, res) {
  try {
    const resposta = await infosService.getMedia() 
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

async function getMediaDisciplina(req, res) {
  try {
    const id  = req.query.id_aluno;
    const id_disc = req.query.id_disciplina
    if (!id) {
      return res.status(400).send({
        message: 'Campo Inválido'
      });
    }
    if (!id_disc) {
      return res.status(400).send({
        message: 'Campo Inválido'
      });
    }
    const resposta = await infosService.getMediaDisciplina(req.body, id, id_disc);
    return res.status(200).send(resposta);


  } catch (error) {
    return res.status(500).send({
      erro: error.message
    });
  }
}


async function getDisciplinaAluno(req, res) {
  try {
    const id  = req.query.id_aluno;
    if (!id) {
      return res.status(400).send({
        message: 'Campo Inválido'
      });
    }

    const resposta = await infosService.getDisciplinaAluno(req.body, id);
    return res.status(200).send(resposta);


  } catch (error) {
    return res.status(500).send({
      erro: error.message
    });
  }
}


export default {
  getMedia,
  getMediaDisciplina,
  getDisciplinaAluno,
 
}
