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
    guia_de_aprendizado:`guia de aprendizado 
    `
}