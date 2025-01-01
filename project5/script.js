const clear = document.getElementById('clear')
const equal = document.getElementById('equal')
const deleteButton = document.getElementById('delete')
const operatorButtons = document.querySelectorAll('.operator')
const screenrowcontent = document.getElementById('screenrowcontent')

let firstNumber = '';
let secNumber = '';
let currentOperator = '';

const Buttons = document.querySelectorAll('.button')
Buttons.forEach(button => {
  button.addEventListener('click', (e)=>{
    if(currentOperator){
      secNumber += e.target.textContent
    }else{
      firstNumber += e.target.textContent
    }
    screenrowcontent.textContent += e.target.textContent
  })
})

equal.addEventListener('click', () => {
  let result;
  firstNumber = parseFloat(firstNumber)
  secNumber = parseFloat(secNumber)

  switch(currentOperator){
    case '+':
    result = firstNumber + secNumber
    break;
    case '-':
    result = firstNumber - secNumber
    break;
    case '*':
    result = firstNumber * secNumber
    break;
    case '/':
    result = firstNumber / secNumber
    break;
    case '%':
    result = firstNumber % secNumber
    break;
    default:
      result = firstNumber;
  }
  screenrowcontent.textContent = result;
  firstNumber = result.toString()
  secNumber = ''
  currentOperator = ''
})

operatorButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    // اگر عدد اول وارد شده و هیچ عملگری انتخاب نشده باشد، عملگر انتخاب می‌شود
    if (firstNumber !== '' && currentOperator === '') {
      currentOperator = e.target.textContent; // ذخیره عملگر
      //screenrowcontent.textContent += ` ${currentOperator} `;
    }
  });
});

// دکمه C برای پاک کردن صفحه نمایش
clear.addEventListener('click', () => {
  screenrowcontent.textContent = '';  // پاک کردن صفحه
  firstNumber = '';
  secNumber = '';
  currentOperator = '';
});

deleteButton.addEventListener('click', () => {
  screenrowcontent.textContent = screenrowcontent.textContent.slice(0, -1);  // حذف آخرین کاراکتر
});