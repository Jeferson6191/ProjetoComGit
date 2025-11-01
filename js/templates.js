let template = {
    home: `
        <section>
            <div class="card m-5 conteiner">
            <div class="card-body mx-auto p-5">
                <h1 class="card-title pb-3">Guia inicial</h1>
                <p class="card-text">Este é um site de montagem e gerenciamento de treinos, desenvolvido com intuito que qualquer pessoa possas utilizar.</p>
                <p class="caard-text">Abaixo há duas opções, a primeira tendo a função de ir diretamente para a aba de montagem de treinos e a segunda redirecionando o usuario para o guia de aprendizado.</p>
                <button class="btn btn-primary mt-3 montar-treino-btn">Montar seu treino agora</button>
                <button class="btn btn-primary ms-2 mt-3 guia-btn">Guia de aprendizado</button>
            </div>
            </div>
        </section>
    `,
    gerenciador_de_treinos:`
            <section >
            
            <div class="card mx-auto p-2 m-5" style="width: 80% ;">
            <div class="card-body">
                <h1 class="card-title">Guia de atividades diarias</h1>
                <p class="card-text">digite aqui suas atividade que você ira fazer no dia.</p>

                <input type="text" class="form-control" placeholder="Atividade física: ... " aria-label="atividade-fisica" aria-describedby="basic-addon1" id="atividade-fisica-input">
                <button class="btn btn-success mt-3" type="button" id="botao_envio">Enviar</button>
            </div>
            <ul class="list-group list-group-flush p-2 ">
                
            </ul>
            

        </section>
    `,
    guia_de_aprendizado:`<section>
            <div class="card m-5 conteiner">
            <div class="card-body mx-auto p-5">
                <h1 class="card-title pb-3">Guia de aprendizado</h1>
                <p class="card-text mb-5" style="font-size: 20px;">Neste site você pode navegar a partir de atalhos como o "tab"
                </p>
                <p class="caard-text mb-5" style="font-size: 20px;">Para montar o seu treino, basta apenas entrar na guia de "gerenciador de treinos", ou clicar no botão abaixo escrito "Montar seu treino agora". Logo após você poderá digitar o treino que você quiser e apertar no botão "enviar" ou apertar "enter". Feito isso, o treino que você digitou ficara salvo na pagina e sera armazenado no seu local storage do seu navegador.
                </p>
                <p class="caard-text mb-5" style="font-size: 20px;">
                    Você poderá também marcar os seus treinos como feitos, no botão "concluido", que se apretado novamente o mesmo será desmarcado como feito.
                </p>
                <p class="caard-text mb-5" style="font-size: 20px;">
                    No site cada treino também poderá ser excluido separadamente, assim você conseguira montar o treino que mais se adequada a você e ao seu dia a dia.
                </p>
                <p class="caard-text mb-5" style="font-size: 20px;">
                    Temos também um sistema de tema (claro e escuro), para se adequar com com o conforto de cada usuario. Você pode trocar o tema no menu do site aonde vai ta escrito "Tema claro" ou "Tema escuro"
                </p>
                
                <button class="btn btn-primary mt-3 montar-treino-btn">Montar seu treino agora</button>
            </div>
            </div>
        </section>
    `
}