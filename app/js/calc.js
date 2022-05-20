
// CALCULATOR SIZE RESPONSIVENESS
(function (){
    // GET ABSOLUTE POSITIONED CALCULATOR OFFSET HEIGHT
    // SET ITS CONTAINER HEIGHT EXACTLY AS OFFSET HEIGHT
    let elemeentHeight =document.querySelector(".calc-item-cetering").offsetHeight;
    console.log(elemeentHeight);
    document.querySelector(".calculator-container").style.height = elemeentHeight + "px";
})();



// CALCULATOR FUNCTIONALITIES
//PUT INPUT NUMBER IN DISPLAY
//WHEN OPERATION CLICKED PUT THAT NUMBER IN 

//STORE INFORMATION IN SEQUEL OBJECT
//PLAY WITH OBEJCT ONE AND OBJECT TWO
//WHEN OPERATION BUTTON CLICKED STORE INFO IN OBJECT ONE WITH OPERATION KEY
//AGAIN OPERATION BUTTON CLICKED TRASFER OB-1 INFO TO OB-2, STORE NEW DATA IN OB-1, THE DO CALCULATION
//STORE RESULT AND AFTER OP-BTN IN OB-1 AND SAME PROCEDURE
(function(){
    let buttonEventInit = document.getElementsByClassName("numbers-btn");
    for(i=0; i < buttonEventInit.length; i++){
        let buttonEvent = buttonEventInit[i]; 
        buttonEvent.addEventListener("click", ()=>{
            console.log("number button works");
            let inputNumber = buttonEvent.textContent;
            console.log(inputNumber);
            document.querySelector(".text-container-display").insertAdjacentText("beforebegin", inputNumber);
        });
    }

    
    let operationBTNInit=document.getElementsByClassName("js-operation-btn");
    let number;
    let ObjectOne = new Object();
    let ObjectTwo = new Object();
    for(i =0; i < operationBTNInit.length; i++){
        let operationBTN = operationBTNInit[i];
        operationBTN.addEventListener("click", ()=>{
            console.log("operation button working");
            let numberInit = document.querySelector(".display-section").textContent;
            numberInit =numberInit.trim();

            // THE TWO VALUES
            number = Number(numberInit);
            let OpetatorSign = operationBTN.textContent;
            console.log(OpetatorSign);
            console.log(typeof number);

            // STORING INFO IN OBJECT
            if(ObjectTwo.number == undefined){
                console.log("second object undefined");
                ObjectOne.number = number;
                ObjectOne.signOp = OpetatorSign;
            }else{
                ObjectTwo.number = ObjectOne.number;
                ObjectTwo.signOp = ObjectOne.signOp;
                bjectOne.number = number;
                ObjectOne.signOp = OpetatorSign;
            }
            
        });
    }

    document.querySelector(".eq-btn").addEventListener("click", ()=>{
        console.log(ObjectOne.number + " " + ObjectOne.signOp);
    });
})();