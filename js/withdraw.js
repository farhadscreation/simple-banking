// using function

// *
// 1. add withdraw button event handler
// 2. get withdraw amount by using getInputFiledValueByUd function
// 3. get previous withdraw amount by using gettextelementvaluebyid function
// 4. calculate new withdraw total and set the value
// 4 - 5  : set new withdraw total by usin set text element value by id
// 5. get previous balance total by using getTextElementValueById
// *


document.getElementById('btn-withdraw').addEventListener('click', function () {
    const newWithdrawAmount = getInputFieldValueById('withdraw-field');
    const previousWithdrawTotal = getTextElementValueById('withdraw-total')
    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    setTextElementValueById('withdraw-total', newWithdrawTotal);
    const previousBalanceTotal = getTextElementValueById('balance-total');
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    setTextElementValueById('balance-total', newBalanceTotal);
})




// nested

// document.getElementById('btn-withdraw').addEventListener('click', function () {
//     const withdrawField = document.getElementById('withdraw-field');
//     const newWirthdrawAmountString = withdrawField.value;
//     const newWithdrawAmount = parseFloat(newWirthdrawAmountString);
//     console.log(newWithdrawAmount)
//     withdrawField.value = '';
// })

// let count = 0; console.log(parseInt("count" + 1));