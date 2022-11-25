// Output
let output = document.querySelector('#output');
// Regular expression
let regExp = /\d{,}+[+-/*.]?/g;
/*
\d
[0-9]
\d{,}+[+-/*.]?/g
g: global
*/
// Numbers and Operators
let numbOps = document.querySelectorAll('.numbOps');
// Equals
let btnEqual = document.querySelector('#btnEquals');
let cnt = 0;
// Event listener
numbOps.forEach((btnNumbOps, i)=> {
    btnNumbOps.addEventListener('click', ()=> {
        console.log(regExp.test(output.value.trim()));
        if(!regExp.test(output.value.trim()))
            output.value += btnNumbOps.innerText;
        if((output.value.length > 1) && (cnt == 1)) {
            output.value = "";
        }else {
            cnt = 0;
        }
    })
})
// Equal
btnEqual.addEventListener('click', ()=> {
    try {
        output.value = eval(output.value); 
        cnt++;
    }catch(e) {
        alert(`An error occurred, please try again: ${e.message}`);
    }

})
// AC
document.querySelector('#btnAC').addEventListener('click', ()=>{
    output.value = "";
})
// Backspace
document.querySelector('#btnDel').addEventListener('click', ()=>{
    output.value = output.value.slice(0, -1);
})