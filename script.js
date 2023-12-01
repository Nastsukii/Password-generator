let sliderElement = document.getElementById("slider")
let buttonElemente = document.getElementById("button")

let sizePassword = document.getElementById("valor")
let password = document.getElementById("password")
let containerPassword = document.getElementById("container-passowod")

let charset = "abcdefghijklmnopqrstuvwxyABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%¨&*_-+="
let novaSenha = ""

sizePassword.innerHTML = sliderElement.value;

slider.oninput = function(){
    sizePassword.innerHTML = this.value;
}

function generatePassword(){
    let pass = "";

    for(let i = 0, n = charset.length; i < sliderElement.value; ++i){
        pass+= charset.charAt(Math.floor(Math.random()*n));
    }
    containerPassword.classList.remove("hide")
    password.innerHTML = pass;
    novaSenha = pass;
}

function copyPassword(){
    alert("Senha copiada com sucesso!!")
    navigator.clipboard.writeText(novaSenha);
}
