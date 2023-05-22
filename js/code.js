// First operand
let firstOp = 0;
// Output
let output = document.querySelector('#output');
// Regular expression
let regExp = new RegExp(/^(\d{0,})*(\d{0,})?(\d*)?$/);
// Operator
let operator = "";
/*
\d
[0-9]
\d{,}+[+-/*.]?/g
g: global
/^\d*\.?\d*$/
\d*\.?\d*
*/
// Numbers and Operators
let numbOps = document.querySelectorAll('.numbOps');
// Equals
let btnEqual = document.querySelector('#btnEquals');
let cnt = 0;
// AC
function clear() {
    output.value = "";
}
document.querySelector('#btnAC').addEventListener('click', clear)
// Backspace
document.querySelector('#btnDel').addEventListener('click', ()=>{
    output.value = output.value.slice(0, -1);
})
// Event listener
numbOps.forEach((btnNumbOps, i)=> {
    btnNumbOps.addEventListener('click', ()=> {
        if(regExp.test(output.value))
            output.value += btnNumbOps.innerText;
    })
})
// Operator
document.querySelectorAll('.operators')
.forEach((ops)=>{
    ops.addEventListener('click', (e)=>{
        firstOp = output.value?.length ? output.value.slice(0, -1)
        : 0;
        operator = e.target.innerText;
        clear();
    })
})
// Equal
btnEqual.addEventListener('click', ()=> {
    try {
        switch(operator) {
            case '+':
                output.value = eval(`${firstOp} + ${output.value}`).toFixed(2); 
            break;
            case '/':
                output.value = eval(`${firstOp} / ${output.value}`).toFixed(2); 
            break;
            case '*':
                output.value = eval(`${firstOp} * ${output.value}`).toFixed(2); 
            break;
            case '-':
                output.value = eval(`${firstOp} - ${output.value}`).toFixed(2); 
            break;
        }
    }catch(e) {
        alert(`An error occurred, please try again: ${e.message}`);
    }

})
