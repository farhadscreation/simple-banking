// using function
document.getElementById('btn-deposit').addEventListener('click', function () {
    // step-1
    // 1. get the element by id
    // 2. get the value from the element
    // 3. convert string value to a number
    const newDepositAmount = getInputFieldValueById('deposit-field');

    // step-2
    // 1. get previous deposit total by id
    const previousDepositTotal = getTextElementValueById('deposit-total');

    // calculate new deposit total
    const newDepositTotal = previousDepositTotal + newDepositAmount;

    // set depositTotalValue 
    setTextElementValueById('deposit-total', newDepositTotal)

    // get previous balance by using the function
    const previousBalanceTotal = getTextElementValueById('balance-total');
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;

    setTextElementValueById('balance-total', newBalanceTotal);

})

// using nested

// document.getElementById('btn-deposit').addEventListener('click', function () {
//     const depositField = document.getElementById('deposit-field');
//     const newDepositAmountString = depositField.value;
//     const newDepositAmount = parseFloat(newDepositAmountString);
//     console.log(newDepositAmount);
//     const depositTotalElement = document.getElementById('deposit-total')
//     const previousDepositTotalString = depositTotalElement.innerText;
//     const previousdeposiTotal = parseFloat(previousDepositTotalString);
//     const newDepositTotal = previousdeposiTotal + newDepositAmount;
//     depositTotalElement.innerText = newDepositTotal;
//     depositField.value = '';
// })


// let count = 0; console.log(parseInt("count" + 1));

// // get deposit input field


