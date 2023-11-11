const pass = document.querySelector("#pass");
const passC = document.querySelector("#pass-confirm");
const suform = document.querySelector("form");

suform.addEventListener("submit", CheckVal);

function CheckVal(e)
{
    console.log(pass.value);
    console.log(passC.value);

    if(pass.value != passC.value)
            e.preventDefault();
}

