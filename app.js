document.getElementById("get-res").addEventListener("click", works);

let loveCount = 0;
let totalCount = 0;
function works(){
    const firstInput = document.getElementById("yourName").value;
    const lastInput = document.getElementById("cushName").value;

    const fLength = firstInput.length;
    const lLength = lastInput.length;

    const lengthTotal = fLength + lLength;

    const firstInputValue = firstInput.toUpperCase();
    const lastInputValue = lastInput.toUpperCase();

    if(!firstInput || !lastInput){
        alert("Please enter your name or your partner name");         
    }
    else{
        getLoveCount(firstInputValue,fLength);
        getLoveCount(lastInputValue,lLength);
        loveCalculate(loveCount,lengthTotal);

        if(fLength == lLength){
            totalCount = 3;
        }

        document.getElementById("yourName").value = '';
        document.getElementById("cushName").value = '';

        document.getElementById("yName").innerText = firstInput;
        document.getElementById("cName").innerText = lastInput;
        document.getElementById("res").innerText = Math.ceil(totalCount);

        document.querySelector(".input-area").style.display = "none";
        document.querySelector(".result-area").style.display = "block";
         console.log(totalCount);
        
    }
}

function getLoveCount(name,length){
    for(i = 0; i < length; i++){
        let checkLetter = name.substring(i, i+1);
        switch(checkLetter){
            case "L":
                loveCount += 4;
                break;
            case "O":
                loveCount += 4;
                break;
            case "V":
                loveCount += 4;
                break;
            case "E":
                loveCount += 4;
                break;
            case "A":
                loveCount += 2;
                break;
            case "I":
                loveCount += 1;
                break;
            case "U":
                loveCount += 3;
                break;
            case "M":
                loveCount += 2;
                break;
            case "R":
                loveCount += 2;
                break;
            case "Y":
                loveCount += 3;
                break;
        }
    }
}

function loveCalculate(loveCount,lengthTotal){
    if(loveCount >= 0 && loveCount <= 2){
        totalCount = 5 - 143/lengthTotal;
    }
    else if(loveCount >= 3 && loveCount < 5){
        totalCount = 15 - 143/lengthTotal;
    }
    else if(loveCount >= 5 && loveCount < 7){
        totalCount = 30 - 143/lengthTotal;
    }
    else if(loveCount >= 7 && loveCount < 9){
        totalCount = 45 - 143/lengthTotal;
    }
    else if(loveCount >= 9 && loveCount < 11){
        totalCount = 60 - 143/lengthTotal;
    }
    else if(loveCount >= 11 && loveCount < 13){
        totalCount = 75 - 143/lengthTotal;
    }
    else if(loveCount >= 13 && loveCount < 15){
        totalCount = 85 - 143/lengthTotal;
    }
    else if(loveCount >= 15 && loveCount < 17){
        totalCount = 90 - 143/lengthTotal;
    }
    else if(loveCount >= 17 && loveCount < 19){
        totalCount = 105 - 143/lengthTotal;
    }
    else if(loveCount >= 19 && loveCount < 21){
        totalCount = 110 - 143/lengthTotal;
    }
    else if(loveCount >= 21 && loveCount < 23){
        totalCount = 125 - 143/lengthTotal;
    }
    else{
        totalCount = 0;
    }
    if(totalCount > 100){
        totalCount = 99;
    }
}

document.getElementById("btn").addEventListener("click", function(){
    document.querySelector(".input-area").style.display = "block";
    document.querySelector(".result-area").style.display = "none";
    loveCount = 0;
})