let userInput=prompt("Enter a symbol");
userInput=(userInput===null)?
    "Cancelled":(userInput===""||userInput.length>1)?
        " ":userInput.toLowerCase();

switch(userInput){
    case "a":
    case "e":
    case "o":
        alert(userInput.toUpperCase());
        break;

    case "x":
    case "y":
        alert(userInput+userInput);
        break;

    case "s":
    case "d":
    case "q":
    case "m":
        let sum = Math.trunc(Math.random()*10 + Math.random()*10) || 1;
        alert(sum);
        break;
    
    case " ":
        alert(Boolean(userInput));
        break;

    case "Cancelled":
        alert(userInput);
        break;

    default:
        let max = Math.max(Math.random(),Math.random(),Math.random());
        alert(max);

}