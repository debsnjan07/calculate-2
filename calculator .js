let add =document.querySelector('#add')
let result = document.querySelector('#result')

//let math = sum(a,b)
add.addEventListener('click',(e)=>{
    let a = parseInt(document.getElementById('first').value)
    let b = parseInt(document.getElementById('second').value)
    if (isNaN(a) || isNaN(b)) {
        result.textContent = "Please enter valid numbers!";
    } else {

    let sum = (a, b) => a + b;
                let math = sum(a, b);
                result.textContent = `The sum is ${math}`;
 }})



