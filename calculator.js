const sign=prompt("Enter your Operator: +, -, /, *,%");
const number_1=parseInt (prompt("Enter the fist number:  "));
const number_2=parseInt(prompt("Enter the second number"));

    if (sign == "+"){
        answer = number_1 + number_2;
        alert(answer);
    }
    else if(sign == "-"){
        answer = number_1 - number_2;
        alert(answer);
    }
    else if(sign == "/"){
        answer = number_1 / number_2;
        alert(answer);
    }
    else if(sign="*"){
        answer = number_1 * number_2;
        alert(answer);
    }
    else if (sign == "%"){
        answer = number_1 % number_2;
        alert(answer);
    }
    else {
        alert("You did not enter a sign");
    }