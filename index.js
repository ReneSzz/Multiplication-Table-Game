
class mathGame {
constructor(num1, num2){
   this.num1 = num1;
    this.num2 =  num2;
    this.answer = 0;
  this.operator = "*";
}
answerCalc(){

        this.answer = this.num1 * this.num2;
        this.answer = Math.round(this.answer);
        
    }

    randomize(){
        if (tableLevel == "All"){
        this.num1 = Math.floor(Math.random() * 9) + 2
        this.num2 = Math.floor(Math.random() * 9) + 2
        }
        if (tableLevel != "All"){
                this.num1 = tableLevel;
                this.num2 = Math.floor(Math.random() * 9) + 2
                }
    
    question.innerHTML = `${this.num1} ${this.operator} ${this.num2} = `;
    }
}


let currentGame = new mathGame(0,0,'*')




const pageTitle = document.getElementById('operator');
const question = document.getElementById('operation');
const labelInput = document.getElementById('userInput');
const bgModal = document.getElementById('bgModal');
const modalContent = document.getElementById('modalContent');
const modalText = document.getElementById('modalText');
const navbarElements = document.getElementsByClassName('navElement');
const navBar = document.getElementById('navbar');
max = 10;
operatorMax = 3;
userAnswer = "";
tableLevel = "All";



currentGame.randomize();
currentGame.answerCalc();




labelInput.addEventListener('keypress', function (e) {
        
        if (e.key === 'Enter') {
          console.log("answer");
          userAnswer = labelInput.value;


          if (userAnswer == currentGame.answer)
          {
                modalText.innerHTML = "Correct &#10004;"
                modalContent.style.color = "green"
                bgModal.style.display = "flex";
                console.log("winner");
                setTimeout(function(){
                        bgModal.style.display = "none";


                }, 400); 
                
                labelInput.value ="";
                currentGame.randomize();
                currentGame.answerCalc();
                
        }
        else if (userAnswer !== currentGame.answer){
                modalText.innerHTML = "Incorrect!"
                modalContent.style.color = "red";
                bgModal.style.display = "flex";
                setTimeout(function(){
                        bgModal.style.display = "none";


                }, 400); 
        }
        }
    });

    [...navbarElements].forEach(element => {
        element.addEventListener('click', function(e)
        {
                for (const i of navbarElements){
                        i.style.color="white";
                }
                element.style.color ="red";
                tableLevel = element.innerHTML;
                console.log(tableLevel);
                labelInput.value ="";
                currentGame.randomize();
                currentGame.answerCalc();
        })
    });


    