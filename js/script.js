/* Acessando o botão */
let botaoAdd = document.querySelector("#adicionar-tarefa");
/* Acessando a tarefa */
let inputTarefa = document.querySelector("#tarefa-digitada");
/* Inserindo nome na tarefa */
let divTarefas = document.querySelector("#tarefas");


/* Função para percorrer todos botoes check e finalizar */
function addAcaoDeFinalizarTarefa() {
    let listaDeBotoes = document.querySelectorAll(".botao-tarefa");
    for (let i = 0; i < listaDeBotoes.length; i++) {
        let botao = listaDeBotoes[i];

        botao.addEventListener('click', function () {
            /* Verificando */
            if (window.confirm("Você tem certeza que quer excluir?")) {
                /* Seleciona o avô do pai, para se remover da estrutura */
                botao.parentElement.parentElement.remove();
            }
        })
    }
}

addAcaoDeFinalizarTarefa();

/* Função para criar tarefa */
function criarTarefa() {
    /* Verificando se está vazia */
    if (inputTarefa.value.trim() == "") {
        return alert("Você deve digitar uma tarefa primeiro!");
    }
    /* HTML do card */
    let tarefa = ` <div class="col-md-4 mb-4">
    <div class="card-tarefa">
        <div class="texto-tarefa">
            ${inputTarefa.value}
        </div>
        <div class="botao-tarefa">
            <img src="img/check.png" width="32" alt="Botão para finalizar tarefa"
                title="Botão para finalizar tarefa">
        </div>
    </div>
</div>`

    /* Agregando tarefa */
    divTarefas.innerHTML += tarefa;

    /* Limpando input para nova tarefa */
    inputTarefa.value = " ";

    /*  alert("Tarefa criada: " + inputTarefa.value); */
}

/* Com o clik criamos a tarefa */
botaoAdd.addEventListener('click', criarTarefa);

/* Para funcionar com Enter, uso de função anonima */
inputTarefa.addEventListener('keypress', function (event) {
    if (event.key == "Enter") {
        criarTarefa();
    }
});