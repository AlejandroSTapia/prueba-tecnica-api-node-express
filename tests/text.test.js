import request from 'supertest';
import { describe, it, expect } from 'vitest';
import app from '../src/app.js';

describe('POST /text/process', () => {

  it('debe procesar los paréntesis desde los más internos', async () => {
    const response = await request(app)
      .post('/text/process')
      .send({
        text: '(Hola (Mundo))'
      });

    expect(response.status).toBe(200);

    expect(response.body).toEqual({
      result: [
        '(Hola (Mundo))',
        '(Hola odnuM)',
        'Mundo aloH'
      ]
    });
  });

  it('debe devolver 400 cuando no se envía el texto', async () => {
    const response = await request(app)
      .post('/text/process')
      .send({});

    expect(response.status).toBe(400);

    expect(response.body).toEqual({
      status: 'error',
      message: 'El texto es obligatorio y debe ser una cadena de caracteres.'
    });
  });

  it('debe devolver 400 cuando los paréntesis no están balanceados', async () => {
    const response = await request(app)
      .post('/text/process')
      .send({
        text: '(Hola (Mundo)'
      });

    expect(response.status).toBe(400);

    expect(response.body).toEqual({
      status: 'error',
      message: 'Los paréntesis del texto no están balanceados.'
    });
  });

});

describe('POST /text/transform', () => {

  it('debe aplicar todas las transformaciones al texto', async () => {
    const response = await request(app)
      .post('/text/transform')
      .send({
        text: 'Hello world! This is a test. Hello again.'
      });

    expect(response.status).toBe(200);

    expect(response.body).toEqual({
      alternating_caps: 'HeLlO WoRlD! ThIs Is A TeSt. HeLlO AgAiN.',
      vowel_replacement: 'Hillu wurld! Thos os e tist. Hillu egeon.',
      unique_words: [
        'world',
        'This',
        'is',
        'a',
        'test',
        'again'
      ]
    });
  });

  it('debe devolver 400 cuando no se envía el texto', async () => {
    const response = await request(app)
      .post('/text/transform')
      .send({});

    expect(response.status).toBe(400);

    expect(response.body).toEqual({
      status: 'error',
      message: 'El texto es obligatorio y debe ser una cadena de caracteres.'
    });
  });

  it('debe considerar iguales las palabras sin importar mayúsculas y minúsculas', async () => {
    const response = await request(app)
      .post('/text/transform')
      .send({
        text: 'Hello hello world'
      });

    expect(response.status).toBe(200);

    expect(response.body.unique_words).toEqual([
      'world'
    ]);
  });

});