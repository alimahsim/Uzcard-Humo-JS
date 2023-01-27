
console.log("Hello world!");

// Recognizes cards

function getCardNum(num){

    if (num.startsWith('8600') && num.length === 16){
            console.log(`You've entered Humo card , the number is: ${num}`);

    }else if(num.startsWith('9860') && num.length === 16){
            console.log(`You've entered Uzcard , the number is: ${num}`);

    }else{
        if(num == NaN && num.length !== 16){
            console.log("You've entered rubbish mate!")
        }
    }   
}

let result = getCardNum();
console.log(result);

/*
function cardMask(num, char = "*"){
    num = num.replace(/[^0-9]+/g, '');
    let len = num.length;
    return num.substring(0,4) + char.repeat(l-8) + num.substring(len-4,len);
}
cardMask();
*/

/*
let sentences = "I with could have done it";
console.log(sentences.startsWith('I'));

*/

