import {
  reverseText,
  hasBalancedParentheses,
  alternateCaps,
  replaceVowels,
  getUniqueWords
} from '../utils/textUtils.js';

const processText = (text) => {

  if (!hasBalancedParentheses(text)) {
  const error = new Error('Los paréntesis del texto no están balanceados.');
  error.status = 400;
  throw error;
}
  
  const steps = [text];
  let currentText = text;
//busca el primer paréntesis que no contenga otros paréntesis dentro y da como res (Mundo)
  let match = currentText.match(/\([^()]*\)/); 

  while (match) {
    const parentheses = match[0]; //es igual que (Mundo)

    const content = parentheses.slice(1, -1);//elimina los paréntesis

    const reversedContent = reverseText(content); //invierte el contenido

    //reemplaza el contenido original con el contenido invertido (Hola odnuM)
    currentText = currentText.replace(
      parentheses,
      reversedContent
    );

    //lo agrega a la lista de pasos
    steps.push(currentText);
//volve a buscar el siguiente paréntesis que no contenga otros paréntesis dentro
    match = currentText.match(/\([^()]*\)/);
  }
  //como es while, se repite y cuando no encuentra más paréntesis, sale del while y devuelve la lista de pasos
  //dando como resultado ["Hola (Mundo)", "Hola odnuM"]

  return steps;
}

//2do ejercicio: Capitalización alternada, remplazo de vocales
const transformText = (text) => {
  const alternatingCaps = alternateCaps(text);
  const vowelReplacement = replaceVowels(text);
  const uniqueWords = getUniqueWords(text);

  return {
    alternating_caps: alternatingCaps,
    vowel_replacement: vowelReplacement,
    unique_words: uniqueWords
  };
};

export default {
  processText,
  transformText
};