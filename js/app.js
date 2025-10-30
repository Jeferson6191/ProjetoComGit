function script() {
    

//navbar
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

//redirecionamentos de botões

let indentificador_guia = localStorage.getItem('localizador_guia');
let main = document.querySelector("#main");
seletor_guia()

function seletor_guia() {
indentificador_guia = localStorage.getItem('localizador_guia');

    switch (indentificador_guia) {
    case "home":
            main.innerHTML = template.home;
            
        break;

    case "guia_aprendizado":
            main.innerHTML = template.guia_de_aprendizado;
        break;

    case "gerenciador_treinos":
            main.innerHTML = template.gerenciador_de_treinos;
        break;

    default:
        localStorage.setItem("localizador_guia", "home")
        indentificador_guia = "home";
        seletor_guia()
        break;
        
    }
    
}

//se clicar no home
document.querySelector(".home-btn").addEventListener("click", ()=>{
    localStorage.setItem("localizador_guia", "home")
    seletor_guia();script()
})

document.querySelector(".montar-treino-btn").addEventListener("click", ()=>{
    localStorage.setItem("localizador_guia", "gerenciador_treinos")
    seletor_guia();script()
})

document.querySelector(".guia-btn").addEventListener("click", ()=>{
    localStorage.setItem("localizador_guia", "guia_aprendizado")
    seletor_guia();script()
})
}
script()
