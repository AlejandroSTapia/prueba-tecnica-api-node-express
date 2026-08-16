import textService from '../services/textService.js';

const processText = (req, res) => {
  const { text } = req.body;

  if (typeof text !== 'string' || !text.trim()) {
    return res.status(400).json({
      status: 'error',
      message: 'El texto es obligatorio y debe ser una cadena de caracteres.'
    });
  }

  try {
    const result = textService.processText(text);

    return res.status(200).json({
      result
    });

  } catch (error) {
    return res.status(error.status || 500).json({
      status: 'error',
      message: error.message || 'Error al procesar el texto.'
    });
  }
};

const transformText = (req, res) => {
  const { text } = req.body;

  if (typeof text !== 'string' || !text.trim()) {
    return res.status(400).json({
      status: 'error',
      message: 'El texto es obligatorio y debe ser una cadena de caracteres.'
    });
  }

  const result = textService.transformText(text);

  return res.status(200).json(result);
};

export default {
    processText,
    transformText
};
