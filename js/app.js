
script()

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

// função de troca de tema guardando no LocalStorage para salvar o tema
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
            document.querySelector(".navbar-text").innerHTML= `Guia - <strong>Home</strong>`
            
        break;

    case "guia_aprendizado":
            main.innerHTML = template.guia_de_aprendizado;
            document.querySelector(".navbar-text").innerHTML= `Guia - <strong>Guia de aprendizado</strong>`
        break;

    case "gerenciador_treinos":
            main.innerHTML = template.gerenciador_de_treinos;
            document.querySelector(".navbar-text").innerHTML= `Guia - <strong>Gerenciador de treinos</strong>`
            atividade_fisica()
            
            
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
// se clicar em qualquer botão que leva para a aba de gerenciador de treinos
document.querySelectorAll(".montar-treino-btn").forEach(element => {
    element.addEventListener("click", ()=>{
    localStorage.setItem("localizador_guia", "gerenciador_treinos")
    seletor_guia();script()
})
});
// se clicar em qualquer botão que leva para a aba de Guia de aprendizado
document.querySelectorAll(".guia-btn").forEach(element => {
    element.addEventListener("click", ()=>{
    localStorage.setItem("localizador_guia", "guia_aprendizado")
    seletor_guia();script()
})
});




//sistema do guia de atividades fisíca
function atividade_fisica() {
// código para mudar o placehoder a cada 3 segundo para facilitar compreenção de usuarios
let exercicios = [
  "Flexões de braço",
  "Abdominais",
  "Agachamentos",
  "Prancha",
  "Corrida estacionária",
  "Polichinelos",
  "Burpees",
  "Avanço",
  "Salto com agachamento",
  "Pular corda"
];

 exercicios.forEach((element, index) => {
  setTimeout(() => {
    document.querySelector("#atividade-fisica-input").placeholder =`Atividade física: ${element}` ;
  }, 3000 * index); // muda a cada 3 segundos
});

//váriaveis importantes para o funcionamento da parte principal do site
let lista_p_inserir = document.querySelector(".list-group");

let atividade_fisica_input = document.querySelector("#atividade-fisica-input");

let botao_envio = document.querySelector("#botao_envio");

let exercicios_agora

let contagem = Number(localStorage.getItem("contagem"))
// loop para percorrer o local storage e trazer de volta os exercicios que ja foram salvos anteriormente
for (let index = 0; index <= contagem; index++) {
    if (localStorage.getItem(`index${index}`) != null) {

        lista_p_inserir.innerHTML+=`

                     <li class="list-group-item d-flex justify-content-between index${String(index)}"><p class= "text-break">${String(localStorage.getItem(`index${index}`))}</p>
                
                <div>
                   <button class="btn btn-success index${String(index)}btnconcluido" type="button">Concluido</button>
                    <button class="btn btn-danger index${String(index)}btndelete" type="button">Excluir</button> 
                </div>
                     </li>`
                    
    }
    if (localStorage.getItem(`concluido${index}`)) {

                document.querySelector(`.index${String(index)}`).classList.add("concluido")

            }
}

// função para se clicar no botão de enviar exercicio
botao_envio.addEventListener("click", ()=>{
    // verificando se o valor no input é maior que 3
    if (atividade_fisica_input.value.length > 3) {
        exercicios_agora = atividade_fisica_input.value;
        // aumentando contegem (variavel essencial para localização dos exercicos)
        contagem++
        // validação se caso a contagem não existir
        if (contagem == null) {
            contagem = 0
        }

        // adição visual do exercicio com classe unica no HTML
        lista_p_inserir.innerHTML+=`
                     <li class="list-group-item d-flex justify-content-between index${String(contagem)}">${String(exercicios_agora)}
                <div>
                    <button class="btn btn-success index${String(contagem)}btnconcluido" type="button">Concluido</button>
                    <button class="btn btn-danger index${String(contagem)}btndelete" type="button">Excluir</button> 
                </div>
                     </li>`
    }
    //alert de teste
    // alert(
    //     `   <div>
    //                 <button class="btn btn-success" stylezz type="button">Concluido</button>
    //                 <button class="btn btn-danger index${String(contagem)}btndelete" type="button">Excluir</button> 
    //             </div>
    //                  </li>`
    // )
        
       
        //guardando informações no local storage. 
        // index0, flexão, assim em diante
        localStorage.setItem(`index${String(contagem)}`, exercicios_agora)
        localStorage.setItem("contagem",contagem)
        contagem = Number(localStorage.getItem("contagem"))
        //alerts de teste
        // alert(typeof(contagem))
        // alert(contagem)
        //chamada de função para diversas validações
        indentificar_botões()
     
})
const botoes = document.querySelectorAll(".list-group button");
//remover
//função para indentificar o botão delete, e concluido e dar as respectivas funcionalidades para cada um
indentificar_botões()
function indentificar_botões() {
const botoes= document.querySelectorAll(".list-group button");
// este for each indentifica todos os botões e coloca para esperar evento de clique para todos
botoes.forEach(botao => {
    botao.addEventListener("click", () => {
        // se caso qualquer um for clicado iniciara abaixo a verificação de qual botão foi clicado
        // este for serve para fazer uma varredura em todos as atividades fisicas e localizar precisamente a qual foi clicada
        for (let index = 0; index <= contagem; index++) {

            if(botao.classList.contains(`index${String(index)}btndelete`) == true){//sistema de indentificação do botaodelete para deletar seu item
                // aqui ele filtra e indentifica exatamente em qual botão delete foi apertado, logo apos ele remove o item visualmente no HTML e remove também no local storage, assim removendo-o definitivamente
                document.querySelector(`.index${String(index)}`).outerHTML=""
                localStorage.removeItem(`index${String(index)}`)
                localStorage.removeItem(`concluido${String(index)}`)

            }if (botao.classList.contains(`index${String(index)}btnconcluido`) == true) {
                if (localStorage.getItem(`concluido${index}`)) {
                    // aqui ele filtra e indentifica exatamente em qual botão concluido foi apertado, logo apos ele adiciona uma borda verde visualmente no HTML e adiciona também a sinalização no local storage.
                document.querySelector(`.index${String(index)}`).classList.remove("concluido")

                localStorage.removeItem(`concluido${String(index)}`)

            }else{
                //E se caso o usuario aperta novamente o botão, o mesmo acontece novamente, mas removendo do local storage e visualmente.
                document.querySelector(`.index${String(index)}`).classList.add("concluido")
                localStorage.setItem(`concluido${String(index)}`, `concluido${String(index)}`)
            }
                

            }
        
        }
        
    });
});

}
}}
