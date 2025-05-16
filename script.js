document.getElementById('add').addEventListener('click', function() {
    const input = document.getElementById('digite');
    const valorInput = input.value.trim();

    if (valorInput) {
        const itemLista = document.createElement("li"); 
        itemLista.className = "item-tarefa"; 
        const spanTexto = document.createElement("span"); 
        spanTexto.textContent = valorInput;

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";

        //popup
        checkbox.addEventListener('change', function() {
            if (checkbox.checked) {
                alert("Parabéns!");
            }
        });

        itemLista.appendChild(spanTexto);  
        itemLista.appendChild(checkbox);   

        document.getElementById("listaTarefas").appendChild(itemLista);
        input.value = '';
    }
});

//limpa a lista
document.getElementById('Limpar').addEventListener('click', function() {
    document.getElementById('listaTarefas').innerHTML = ''; 
});