const form = document.getElementById('form-tarefa');
const tarefas = [];

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
    atualizaMédiaFinal() ;
});

function adicionaLinha() {
    const inputNomeTarefa = document.getElementById('nome-tarefa');

    tarefas.push(inputNomeTarefa.value);

    let linha = '<tr>';
    linha += `<li>${inputNomeTarefa.value}</li>`;
    linha += '<tr>';

    linhas += linha;

    inputNomeTarefa.value = '';
    inputNomeTarefa.value = '';

    alert(`Tarefa: ${inputNomeTarefa.value}`);
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}