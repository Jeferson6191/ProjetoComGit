
let body = document.querySelector("body");
let verificacao_tema_local = localStorage.getItem('tema');
let btn_tema = document.querySelector("#switch-btn-tema");


if (verificacao_tema_local == null) {
    // verificando se é a primeira vez do usuario no site para colocar o tema padrao
    localStorage.setItem('tema',"claro");

    verificacao_tema_local = verificacao_tema_local = localStorage.getItem('tema');
}
// chamando função para colocar o ultimo tema escolhido ou declarar o primeiro tema do usuario
definir_tema()
definir_tema()


// função para se usuario quiser trocar de tema
btn_tema.addEventListener("click", ()=>{
   definir_tema()
})

// função de troca de tema
function definir_tema() {
     switch (verificacao_tema_local) {
        case "claro":
                body.classList.remove('tema-claro');
                body.classList.add('tema-escuro');

                localStorage.setItem('tema',"escuro");

                verificacao_tema_local = verificacao_tema_local = localStorage.getItem('tema');
                btn_tema.innerHTML='Tema claro';
            break;
    
        case "escuro":
                body.classList.remove('tema-escuro');
                body.classList.add('tema-claro');

                localStorage.setItem('tema',"claro");

                verificacao_tema_local = verificacao_tema_local = localStorage.getItem('tema'); 
                btn_tema.innerHTML='Tema escuro';     
            break;
    }
}