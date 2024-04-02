// ------------Rezolvare exercitiu 1 & 2 Varianta 1 ---------------
// const calculatorNumber = document.querySelector('.calculator-button');
// const firstNumberInput = document.querySelector('[name="first-number"]');
// const secondNumberInput = document.querySelector('[name="second-number"]');
// const calculatorResult = document.querySelector('.calculator-result');

// const calculate = () => {
//   const firstNumber = parseInt(firstNumberInput.value);
//   const secondNumber=  parseInt(secondNumberInput.value);
//   calculatorResult.innerText = firstNumber + secondNumber;
// };

// calculatorNumber.addEventListener ('click', calculate);

// --------- rezolvare exercitiu 1 & 2 Varianta 2------------- 
const calculatorForm = document.querySelector('.calculator-form');
const calculatorResult = document.querySelector('.calculator-result');

const calculate = (e) => {
  e.preventDefault(); //nu ne mai refreshuieste pagina cand e ceva submitted plus 
  // ca arata ce s-a intamplat in event in consola
  const formData = new FormData(calculatorForm);

  let firstNumber = formData.get('first-number');
  let secondNumber = formData.get('second-number');
  let operatii = formData.get('operatii');


  if(firstNumber.includes('e') || secondNumber.includes('e')) {
    alert('Please enter only numbers');
    return; 
  }

  firstNumber = parseFloat(firstNumber); // stringul '3.5' va fi convertit la 3.5 ca number
  secondNumber = parseFloat(secondNumber);

  // Number.isInteger(3.5) - false
  //Number.isInteger(3) - true
  if(Number.isInteger(firstNumber) === false || Number.isInteger(secondNumber) === false) { //asa verificam dk un numar este intreg sau nu
    alert('Please enter only integer numbers');
    return; 
  }
  
  if (operatii === '+') {
    calculatorResult.innerText = firstNumber + secondNumber;
  } else {
    if (operatii === '-') {
      calculatorResult.innerText = firstNumber - secondNumber;
    }
  }

  if (operatii === '*') {
    calculatorResult.innerText = firstNumber * secondNumber;
  } else { 
    if (operatii === '/') {
      calculatorResult.innerText = firstNumber / secondNumber;
    }
  }
};

calculatorForm.addEventListener('submit', calculate);

// punem required la input in html ca sa il ceara automat

//Set-up inputuri  ----- Varianta 1 ---- sa nu te lase sa introduci din prima e

// const firstNumberInput = document.querySelector('[name="first-number"]');
// const secondNumberInput = document.querySelector('[name="second-number"]');

// const handleFirstInputChange = () => {
//   if (firstNumberInput.value.length === 0 || firstNumberInput.value.includes('e')) {
//     firstNumberInput.value = firstNumberInput.value.replace('e', '');
//     // "123e" -> 123
//   }
// };

// firstNumberInput.addEventListener('input', handleFirstInputChange);


// ------ String Includes -----
// const numeleMeu = 'Cristian';

// if(numeleMeu.includes('sti')) === false { // === includes da fie false fie true...
//   alert('Numele tau include sti');
// }