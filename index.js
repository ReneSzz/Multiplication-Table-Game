
const pageTitle = document.getElementById('operator');
const question = document.getElementById('operation');
const labelInput = document.getElementById('userInput');
const bgModal = document.getElementById('bgModal');
max = 10;
operatorMax = 3;
num1 = 0; 
num2 = 0;
operator = "x";
answer = 0;
userAnswer = "";





randomize();
console.log(operator);
answer = calculateAnswer(num1,num2,operator);
console.log(answer);
pageTitle.innerHTML = ``;
question.innerHTML = `${num1} ${operator} ${num2} = `;

function calculateAnswer(num1,num2)
{
   
    answer = num1 * num2;
  
    
    answer = Math.round(answer);
    return answer;

}


function randomize()
{
    num1 = Math.floor(Math.random() * 10) + 1
    num2 = Math.floor(Math.random() * 10) + 1

question.innerHTML = `${num1} ${operator} ${num2} = `;
    
}




labelInput.addEventListener('keypress', function (e) {
        
        if (e.key === 'Enter') {
          console.log("enter");
          userAnswer = labelInput.value;
          if (userAnswer == answer)
          {
                bgModal.style.display = "flex";
                console.log("winner");
                setTimeout(function(){
                        bgModal.style.display = "none";


                }, 400); 
                
                labelInput.value ="";
                randomize();
                answer = calculateAnswer(num1,num2);
                
        }
        }
    });