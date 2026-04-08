// Dom Traversing
// let abc = document.getElementById('about')
// abc.textContent = 'abul'
// console.log(abc.parentElement.nextElementSibling.firstElementChild.textContent = 'Saiful islam');


// let abc = document.getElementById('about')
// console.log(abc.parentElement.parentElement.parentElement);


// let abc = document.getElementById('main')
// let first = abc.firstElementChild
// let mid = first.nextElementSibling
// let last = abc.lastElementChild
// console.log(mid);


// function fast(){
//     console.log(first.textContent);
// }
// function Mid(){
//     console.log(mid.textContent);
// }
// function Last(){
//     console.log(last.textContent);
// }



// let num1 = document.getElementById('num1')
// let num2 = document.getElementById('num2')
// let result = document.getElementById('result')

// function sum(){
//     result.textContent = parseInt(num1.value)+parseInt(num2.value) // string hole (+) hole paresInt() diye convert kore nite hobe number e .karon (+) diye jog and concate uvoy e bujhay . 
// }
// function sub(){
//     result.textContent = num1.value - num2.value // (-) er khetre number ke convert korte hoy "na" jog er moto .
// }



// let guess = document.getElementById('guessNumber')
// let btn = document.getElementById('btn')
// let randomNumber = Math.floor(Math.random() * 20) + 1;
// let result = document.getElementById('result')
// console.log(randomNumber);


// btn.onclick = function(){
//     if(guess.value == randomNumber){
//         result.textContent = 'you guess it right'
//     }
//     else if(guess.value > randomNumber){
//         result.textContent= 'too high! try lower'
//     }
//     else if(guess.value < randomNumber){
//         result.textContent= 'too low! try higher'
//     }
// }





let show = document.getElementById('show')
let addpara = document.getElementById('addpara')
let remove = document.getElementById('remove')
show.onclick = function(){
    let main = document.getElementById('main')
    let heading = document.createElement('h1')
    heading.textContent = 'This is a new heading'
    heading.style.textAlign = 'center'
    main.style.background = 'red'
    heading.style.color = 'white'
    heading.style.height = '40px'
    main.appendChild(heading)
}

addpara.onclick = function(){
    let main = document.getElementById('main')
    let para = document.createElement('p')
    para.textContent = 'This is a new paragraph'
    para.style.textAlign = 'center'
    para.style.color = 'white'
    main.appendChild(para)
}

remove.onclick = function(){
    let main = document.getElementById('main')  
    main.lastElementChild.remove()
}



























































