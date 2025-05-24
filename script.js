//evento de clique no botão "Adicionar"
document.getElementById('adicionar').addEventListener('click', function() {
    const input = document.getElementById('digite');
    const valorInput = input.value.trim();

    if (valorInput) {
        const itemLista = document.createElement("li"); // cria tag li
        itemLista.className = "item-tarefa"; // classe para estilizar

        const spanTexto = document.createElement("span"); // cria o texto da tarefa
        spanTexto.textContent = valorInput;

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";

        // evento que mostra o popup ao marcar o checkbox
        checkbox.addEventListener('change', function() {
            if (checkbox.checked) {
                alert("Parabéns!");
            }
        });

        itemLista.appendChild(spanTexto);   // adiciona texto
        itemLista.appendChild(checkbox);    // adiciona checkbox

        document.getElementById("listaTarefas").appendChild(itemLista);
        input.value = '';
    }
});

document.getElementById('Limpar').addEventListener('click', function() {
    document.getElementById('listaTarefas').innerHTML = ''; //limpa a lista inteira
});
