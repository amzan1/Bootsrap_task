// let UserName = prompt("Enter your name ");

// while(UserName==""||UserName==null){
//     UserName = prompt("Enter your name ");
// }

// let gender = prompt("Enter your gender M for male and F for female");
// gender = gender.toLowerCase;

//     let G=false;
//     while(G){
//         gender = prompt("Enter your gender M for male and F for female");
//         gender = gender.toLowerCase;
//         if (gender == "m" || gender == "f"){
//             let G=true;}
//     }

// let UserAge = prompt("Enter your age ");
// if(UserAge <=0){
//     alert("The age is less than or equal zero");
// }

// alert("Welcom "+UserName);

function MinAndMax(arr){
    let max = 1 ;
    let min = 1;

    for (let i = 0; i < arr.length; i++) {
        if(max < arr[i]){
            max = arr[i];
        }
        if(min > arr[i]){
            min = arr[i];
        }
    }
    console.log(`The maximum number is ${max} \nThe minimum number is ${min}`)
}

MinAndMax([1,2,3,8,5,6,9,7,5,6])

function Reverse(arr){
    let arr2 =[];
    for (let i = arr.length - 1; i > -1; i--) {
        arr2.push(arr[i]);
    }

    return arr2;
}

console.log(Reverse([1,2,3,4,5,6]));


function HasString(arr){
    let check = false;
    for (let i = 0; i < arr.length; i++) {
        if(typeof arr[i] === 'string'){
          check = true;  
       }   
    }
    return check;
}

console.log(HasString([1,2,"3",4]));
