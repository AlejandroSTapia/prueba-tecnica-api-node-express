const reverseText = (text) => {
    return Array.from(text).reverse().join('');
};

const hasBalancedParentheses = (text) => {
  let balance = 0;

  for (const character of text) {
    if (character === '(') {
      balance++;
    }

    if (character === ')') {
      balance--;
    }

    if (balance < 0) {
      return false;
    }
  }

  return balance === 0;
};


//2. Capitalicacion
const alternateCaps = (text) => {
  let result = '';
  let letterIndex = 0;

  for (const character of text) {
    if (/[a-zA-Z]/.test(character)) {
      result += letterIndex % 2 === 0
        ? character.toUpperCase()
        : character.toLowerCase();

      letterIndex++;
    } else {
      result += character;
      letterIndex = 0;
    }
  }

  return result;
};

//3. Remplazo de vocales
const replaceVowels = (text) => {
  const vowelMap = {
    a: 'e',
    e: 'i',
    i: 'o',
    o: 'u',
    u: 'a',
    A: 'E',
    E: 'I',
    I: 'O',
    O: 'U',
    U: 'A'
  };

  return Array.from(text)
    .map(character => vowelMap[character] ?? character)
    .join('');
};

// 4. Palabras unicas
const getUniqueWords = (text) => {
  const words = text.match(/[\p{L}\p{N}]+/gu) || [];

  const wordCount = {};

  for (const word of words) {
    const normalizedWord = word.toLowerCase();

    wordCount[normalizedWord] =
      (wordCount[normalizedWord] || 0) + 1;
  }

  return words.filter(
    word => wordCount[word.toLowerCase()] === 1
  );
};


export {reverseText, hasBalancedParentheses, alternateCaps, replaceVowels, getUniqueWords};