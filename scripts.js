/**
 * Verkefni 8 – Caesar dulmál með vefviðmóti
 *
 * Verður að passa _nákvæmlega_ við gefið HTML, mun annars brotna.
 * Þ.e.a.s., ekki þarf að skrifa meðhöndlun á HTML elementum sem vantar
 */

/**
 * Kóðar streng með því að hliðra honum um n stök.
 *
 * @param {string} str Strengur sem skal kóða, aðeins stafir í stafrófi
 * @param {number} n Hliðrun, heiltala á bilinu [0, lengd stafrófs]
 * @param {string} alphabet Stafróf sem afkóða á út frá
 * @returns {string} Upprunalegi strengurinn hliðraður um n til hægri
 */
function encode(str, n, alphabet = '') {
  return '';
}

/**
 * Afkóðar streng með því að hliðra honum um n stök.
 *
 * @param {string} str Strengur sem skal afkóða, aðeins stafir í stafrófi
 * @param {number} n Hliðrun, heiltala á bilinu [0, lengd stafrófs]
 * @param {string} alphabet Stafróf sem afkóða á út frá
 * @returns {string} Upprunalegi strengurinn hliðraður um n til vinstri
 */


function decode(str, shift, alphabet = '') {
  // dæmi sem notar „fallaforritun“
  return str
    .toLocaleUpperCase()
    .split('')
    .map(s => alphabet.indexOf(s) - shift) // hliðruð staðsetning stafs
    .map(i => i < 0 ? alphabet.length + i : i) // ef i verður neikvætt, förum aftast í stafróf
    .map(i => alphabet[i])
    .join('');
}

const Caesar = (() => {
  // Default stafróf, uppfært þegar slegið inn í "alphabet"
  let alphabet = '';


  // Default type, uppfært af radio input
  let type = 'encode';

  // Default hliðrun, uppfært af "shift"
  let shift = 3;

  function doStuff(event) {
  event.target.value = '';

  }

  function init(el) {
    this.alphabet = el[0].value;
  }

  return {
    init,
    doStuff,
    shift,
    type,
    alphabet
  };
})();

document.addEventListener('DOMContentLoaded', () => {
  const ceasarForm = document.querySelector('.ceasar');

  Caesar.init(ceasarForm);
});
document.querySelector('#alphabet')
  .addEventListener('blur', (event) => {
    Caesar.alphabet = event.target.value;
  });


document.querySelector('#input')
  .addEventListener('keyup', (event) => {
    let str = event.target.value.charAt(event.target.value.length -1);
    let returnvalue = decode(str, Caesar.shift, Caesar.alphabet);
    let newString = event.target.value. substring(0,event.target.value.length -1);
    let joinedString = newString + returnvalue;
    event.target.value = joinedString;
  });

  document.querySelector('#shift')
  .addEventListener('focus', (event) => {
    Caesar.shift = event.target.value;
    document.querySelector('.shiftValue').innerHTML = Caesar.shift;
  });







