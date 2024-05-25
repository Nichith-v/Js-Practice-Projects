let inputExp = document.getElementById('input-expression');

let buttons = document.querySelectorAll('button');

let str = "";

// console.log(buttons);

let brackets = 1;

Array.from(buttons).forEach((button)=>{
    button.addEventListener("click", (e)=>{
        if(e.target.innerHTML == '='){
            str = eval(str);
            inputExp.value = str;
            brackets = 1;
        }
        else if(e.target.innerHTML == 'C'){
            str = "";
            inputExp.value = str;
            brackets = 1;
        }
        else if(e.target.innerHTML == '( )'){
            if(brackets%2==0){
                str = str + ")";
                brackets ++;
            }else{
                str = str + "("
                brackets ++;
            }
            inputExp.value = str;
        }
        else{
            str = str + e.target.innerHTML;
            inputExp.value = str;
        }
    })
})