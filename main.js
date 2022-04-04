// const People = ['Dan', 'Hope', 'Andrew', 'Faith', 'Joy'];

// console.log(People);

// let myAsc = People.sort();

// console.log(myAsc);

// let myDec = People.reverse();

// console.log(myDec);

// const Object = {"Name":"Praise", "Address":"No 4 Okoh", "Age":20};

// let sentence = "My name is " + Object.Name + ". I live at " + Object.Address + ", I am " + Object.Age + " Years Old.";

// document.querySelector('div').innerHTML = sentence;

//  let heading = document.querySelector('h1');

// let my_output = `My name is ${Object.Name}. I live at ${Object.Address}, I am ${Object.Age} Years Old`;

// heading.innerHTML  = my_output;

// const Info = {
//     "Name":"Newman",
//     "Age": 45,
//     "greeting": function () {
//         return "Good Morning Mr. " + this.Name;
//     }
// }

// heading.innerHTML = Info.greeting();

let up = document.querySelector('.up'),
    down = document.querySelector('.down'),
    numbers=document.querySelectorAll('button'),
    math=document.querySelectorAll('.math button');

    const Equals = document.querySelector('.equals');

    //console.log(numbers);

    for(let i = 0; i<numbers.length; i++){
        numbers[i].onclick = function() {
            if(up.innerHTML==="0"){
                up.innerHTML = numbers[i].innerHTML
            }
            else{
                up.innerHTML +=numbers[i].innerHTML
            }
        }
    }

    Equals.onclick = function () {
        down.innerHTML = eval(up.innerHTML);
    }

    document.querySelector('.clear').onclick = function () {
        up.innerHTML = "0";
		down.innerHTML = "";
    }