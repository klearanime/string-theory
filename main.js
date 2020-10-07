/******************
 * YOUR CODE HERE *
 ******************/

function xify(str) {
  let newStr = '';
  for (let i = 0; i < str.length; i++) {
    newStr = newStr + 'x'; 
  }
  return newStr;
}

function smilify(str) {
  let emoji = '';
  for (let i = 0; i < str.length; i++) {
    emoji = emoji + '😊';
  }
  return emoji;
}

function yellingChars(str) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    result = result + str[i] + '!'; 
  }
  return result;
}

function indexedChars(str) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    result = result + i + str[i]
  } 
  return result
}

function exclaim(str) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '?') {
      result = result + '!';
    } else if (str[i] === '.') {
      result = result + '!';
    } else {
      result = result + str[i];
    }
      }  
      return result 
}

function repeatIt(str, num) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    result = str.repeat(num);
  } 
  return result
} 

function truncate(str) {
  let result = '';
  if (str.length < 18) {
  return str
}
  for (let i = 0; i < 15; i++) {
    result = result + str[i]
  } result = result + '...'
  return result
}

function ciEmailify(name) {
    let result = '';
    for (let i = 0; i < name.length; i++) {
      if (name[i] === ' ') {
        result = result + '.';
      } else {
        result = result + name[i].toLowerCase();
      }
    }
    return result + '@codeimmersives.com'
}

function reverse(str) {
  let newStr = '';
  for (let i = 0; i < str.length; i++) {
    newStr = str[i] + newStr 
  }
  return newStr;
}

function onlyVowels(str) {
  let result ='';
  for (let i = 0; i < str.length; i++) {
    if (str[i].toLowerCase() === 'a' || 
          str[i].toLowerCase() === 'e' || 
            str[i].toLowerCase() === 'i' || 
              str[i].toLowerCase() === 'o' || 
                str[i].toLowerCase() === 'u') {
      result = result + str[i]
    }
  }
  return result
}

function numberedChars(str) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    result = result + '(' + [i + 1] + ')' + str[i];
  }
  return result;
}


function crazyCase() {

}



function titleCase() {

}



function camelCase() {

}



function crazyCase2ReturnOfCrazyCase() {

}



 /********************************************
 * CODE DOWN HERE IS FOR INTERNAL USE ONLY. *
 *           PLEASE DON'T TOUCH!            *
 ********************************************/

if (typeof xify === 'undefined') {
  xify = undefined;
}

if (typeof smilify === 'undefined') {
  smilify = undefined;
}

if (typeof numberedChars === 'undefined') {
  numberedChars = undefined;
}

if (typeof indexedChars === 'undefined') {
  indexedChars = undefined;
}

if (typeof exclaim === 'undefined') {
  exclaim = undefined;
}

if (typeof repeatIt === 'undefined') {
  repeatIt = undefined;
}

if (typeof truncate === 'undefined') {
  truncate = undefined;
}

if (typeof ciEmailify === 'undefined') {
  ciEmailify = undefined;
}

if (typeof reverse === 'undefined') {
  reverse = undefined;
}

if (typeof onlyVowels === 'undefined') {
  onlyVowels = undefined;
}

if (typeof crazyCase === 'undefined') {
  crazyCase = undefined;
}

if (typeof titleCase === 'undefined') {
  titleCase = undefined;
}

if (typeof camelCase === 'undefined') {
  camelCase = undefined;
}

if (typeof crazyCase2ReturnOfCrazyCase === 'undefined') {
  crazyCase2ReturnOfCrazyCase = undefined;
}


module.exports = {
  xify,
  smilify,
  yellingChars,
  indexedChars,
  numberedChars,
  exclaim,
  repeatIt,
  truncate,
  ciEmailify,
  reverse,
  onlyVowels,
  crazyCase,
  titleCase,
  camelCase,
  crazyCase2ReturnOfCrazyCase,
}
