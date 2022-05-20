
// CALCULATOR SIZE RESPONSIVENESS
(function (){
    // GET ABSOLUTE POSITIONED CALCULATOR OFFSET HEIGHT
    // SET ITS CONTAINER HEIGHT EXACTLY AS OFFSET HEIGHT
    let elemeentHeight =document.querySelector(".calc-item-cetering").offsetHeight;
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
    let numberInit;
    let number;
    let OperationResult;

    // MATHMATICAL OPERATION FUNCTION
    let matmatiCalFunc = (firstValue, OpSign, secondValue) =>{
        if(OpSign == "+"){
            // do add operation
            OperationResult = firstValue + secondValue;
            return OperationResult;
        }else if(OpSign == "-"){
            // do minus operation
            OperationResult = firstValue - secondValue;
            return OperationResult;
        }else if(OpSign == "*"){
            // do into operation
            OperationResult = firstValue * secondValue;
            return OperationResult;
        }
        else if(OpSign == "/"){
            // do divide operation
            OperationResult = firstValue / secondValue;
            return OperationResult;
        }
    }

    for(i=0; i < buttonEventInit.length; i++){
        let buttonEvent = buttonEventInit[i]; 
        buttonEvent.addEventListener("click", ()=>{
            // console.log("number button works");
            let inputNumber = buttonEvent.textContent;
            console.log(inputNumber);
            document.querySelector(".text-container-display").insertAdjacentText("beforebegin", inputNumber);
            document.querySelector(".text-container-display").textContent = "";
            numberInit = document.querySelector(".display-section").textContent;
            numberInit =numberInit.trim();
            number = Number(numberInit);
            // console.log(numberInit);
        });
    }

    
    let operationBTNInit=document.getElementsByClassName("js-operation-btn");
    
    let ObjectOne = new Object();
    let ObjectTwo = new Object();
    for(i =0; i < operationBTNInit.length; i++){
        let operationBTN = operationBTNInit[i];
        operationBTN.addEventListener("click", ()=>{
            console.log("operation button working");
            // let numberInit = document.querySelector(".display-section").textContent;
            // numberInit =numberInit.trim();

            // THE TWO VALUES
            let OpetatorSign = operationBTN.textContent;
            // console.log(OpetatorSign);

            // STORING INFO IN OBJECT
            if(ObjectOne.number == undefined){
                console.log("second object undefined");
                ObjectOne.number = number;
                ObjectOne.signOp = OpetatorSign;
                document.querySelector(".display-section").innerHTML =`<span class="text-container-display"></span>`;
                console.log(ObjectOne);
            }else if(ObjectOne.number != undefined){
                console.log("second phase working");
                // ObjectTwo.number = ObjectOne.number;
                // ObjectTwo.signOp = ObjectOne.signOp;
                // ObjectOne.number = number;
                // ObjectOne.signOp = OpetatorSign;
                // console.log(ObjectOne);
                // console.log(ObjectTwo);
                // show result since he clicked another math operation
                let result = matmatiCalFunc(ObjectOne.number, ObjectOne.signOp, number);
                ObjectOne.number= result;
                ObjectOne.signOp = OpetatorSign;
                // document.querySelector(".display-section").textContent = result;
                document.querySelector(".display-section").innerHTML = result + `<span class="text-container-display"></span>`;
            }

        });
    }

    document.querySelector(".eq-btn").addEventListener("click", ()=>{
        console.log(ObjectOne.number + " " + ObjectOne.signOp);
        // IF THERE IS NO FIRST OBJECT THE SHOW THE FIRST OBJECT NUMBER AS RESULT
        // THEN STORE FIRST NUMBER TO THE VARIABLE "number"
        // OTHEWISE DO CALCULATIONS 
        // THEN STORE NUMBER IN "number"
        if(ObjectOne.number ==undefined){
            // ANYONE CLICKS EQUAL MULTIPLE TIMES
            console.log("do something");
            document.querySelector(".display-section").textContent = "";
            setTimeout(()=>{
                document.querySelector(".display-section").textContent = numberInit;
            }, 400);
        }else if(ObjectOne.number !=undefined){
            let x = ObjectOne.number;
            let s = ObjectOne.signOp;
            let result = matmatiCalFunc(x, s, number);
            console.log(result);
            document.querySelector(".display-section").innerHTML = result + `<span class="text-container-display"></span>`;
        }
    });
})();