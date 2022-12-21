
const pageTitle = document.getElementById('operator');
const question = document.getElementById('operation');

max = 10;
operatorMax = 3;
num1 = 0; 
num2 = 0;
operator = 0;
answer = 0;




num1=randomize(num1);
num2=randomize(num2);
console.log(num1, num2);
operator = randomOperator(operator);
console.log(operator);
answer = calculateAnswer(num1,num2,operator);
console.log(answer);
pageTitle.innerHTML = ``;
question.innerHTML = `${num1} ${operator} ${num2} = `;

function calculateAnswer(num1,num2,operator)
{
    switch(operator)
    {

    case("-"):
   
   answer = num1 - num2;
       
    break;

    case("+"):
    
    answer = num1 + num2;
    
  
            break;
    case("/"):
    if (num2 > num1){
    answer = num2 / num1
    }

    else
    answer = num1 / num2;
  
    
            break;
    
     case("*"):
    
      
     answer = num1 * num2;
            break;

     
    }
    answer = Math.round(answer);
    return answer;

}


function randomize(num1)
{
    num1 = Math.floor(Math.random() * 10) + 1
  
    return Math.round(num1);
    
}

function randomOperator(symbol)
{
 symbol =   Math.random() * operatorMax; 
   symbol = Math.round(symbol);
 switch(symbol)
    {

    case(0):
    symbol = "+";
   
       
    break;

    case(1):
    
    symbol = "-";
    
  
            break;
    case(2):

    symbol = "*";
  
    
            break;
    
     case(3):
    
        symbol = "/";
       
            break;

     
    }
    return symbol;
}


