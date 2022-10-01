'use strict';

//1. Функция которая принимает строку и возвращает количество слов в ней.

const textString = 'Hello is the beautiful World!';

function textStr(text) {
  let textArr = text.split(' ');
  return textArr.length;
}

//2. Функция, которая получает строку и возвращает размер самого большого слова в ней

const textString = 'Hello is the beautiful World!';

function findLongWord(string) {
  const wordArr = string.split(' ');
  let longestWord = wordArr[0];
  for(let i = 0; i < wordArr.length; i++) {
    if(wordArr[i].length > longestWord.length) {
      longestWord = wordArr[i];
    }
  }
  return longestWord.length;
};

