
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

document.querySelector(".montar-treino-btn").addEventListener("click", ()=>{
    localStorage.setItem("localizador_guia", "gerenciador_treinos")
    seletor_guia();script()
})

document.querySelector(".guia-btn").addEventListener("click", ()=>{
    localStorage.setItem("localizador_guia", "guia_aprendizado")
    seletor_guia();script()
})
}




//sistema do guia de atividades fisíca
function atividade_fisica() {

// let exercicios = [
//   "Flexões de braço",
//   "Abdominais",
//   "Agachamentos",
//   "Prancha",
//   "Corrida estacionária",
//   "Polichinelos",
//   "Burpees",
//   "Avanço",
//   "Salto com agachamento",
//   "Pular corda"
// ];

//  exercicios.forEach((element, index) => {
//   setTimeout(() => {
//     document.querySelector("#atividade-fisica-input").placeholder =`Atividade física: ${element}` ;
//   }, 3000 * index); // muda a cada 3 segundos
// });

let lista_p_inserir = document.querySelector(".list-group");

let atividade_fisica_input = document.querySelector("#atividade-fisica-input");

let botao_envio = document.querySelector("#botao_envio");

let exercicios_agora

let contagem = Number(localStorage.getItem("contagem"))

for (let index = 0; index <= contagem; index++) {
    if (localStorage.getItem(`index${index}`) != null) {

        lista_p_inserir.innerHTML+=`

                     <li class="list-group-item d-flex justify-content-between index${String(index)}"><p class="text-break">${String(localStorage.getItem(`index${index}`))}</p>
                
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

    
botao_envio.addEventListener("click", ()=>{
    if (atividade_fisica_input.value.length > 3) {
        exercicios_agora = atividade_fisica_input.value;
        contagem++
        if (contagem == null) {
            contagem = 0
        }


        lista_p_inserir.innerHTML+=`
                     <li class="list-group-item d-flex justify-content-between index${String(contagem)}">${String(exercicios_agora)}
                <div>
                    <button class="btn btn-success index${String(contagem)}btnconcluido" type="button">Concluido</button>
                    <button class="btn btn-danger index${String(contagem)}btndelete" type="button">Excluir</button> 
                </div>
                     </li>`
    }
    // alert(
    //     `   <div>
    //                 <button class="btn btn-success" stylezz type="button">Concluido</button>
    //                 <button class="btn btn-danger index${String(contagem)}btndelete" type="button">Excluir</button> 
    //             </div>
    //                  </li>`
    // )
        
       
        //index0, flexão, assim em diante
        localStorage.setItem(`index${String(contagem)}`, exercicios_agora)
        localStorage.setItem("contagem",contagem)
        contagem = Number(localStorage.getItem("contagem"))
        // alert(typeof(contagem))
        // alert(contagem)
        
        indentificar_botões()
     
})
const botoes = document.querySelectorAll(".list-group button");
//remover
indentificar_botões()
function indentificar_botões() {
const botoes= document.querySelectorAll(".list-group button");
botoes.forEach(botao => {
    botao.addEventListener("click", () => {
        
        for (let index = 0; index <= contagem; index++) {
            if(botao.classList.contains(`index${String(index)}btndelete`) == true){//sistema de indentificação do botaodelete para deletar seu item
                // alert(`click delete index${String(index)}btndelete`)
                document.querySelector(`.index${String(index)}`).outerHTML=""
                localStorage.removeItem(`index${String(index)}`)
                
            }if (botao.classList.contains(`index${String(index)}btnconcluido`) == true) {
                if (localStorage.getItem(`concluido${index}`)) {

                document.querySelector(`.index${String(index)}`).classList.remove("concluido")

                localStorage.removeItem(`concluido${String(index)}`)

            }else{
                
                document.querySelector(`.index${String(index)}`).classList.add("concluido")
                localStorage.setItem(`concluido${String(index)}`, `concluido${String(index)}`)
            }
                

            }
        
        }
        
    });
});

}
}
