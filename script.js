    function salvarRegistro() {
        let nome = document.getElementById('modalNome').value;
        let cidade = document.getElementById('modalCidade').value;
        let idade = document.getElementById('modalIdade').value;
        let table = document.getElementById("tabelinha");

        let TabelaTamanho = table.rows.length; 
        let row = table.insertRow(TabelaTamanho);
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        let cell4 = row.insertCell(3);
        row.id = TabelaTamanho;

        let btnEdit = document.createElement("button");
        btnEdit.innerHTML = "Atualizar";
        btnEdit.onclick = function() { editarLinha(TabelaTamanho); };

        let btnRemove = document.createElement("button");
        btnRemove.innerHTML = "Remover";
        btnRemove.onclick = function() { removerLinha(TabelaTamanho); };

        cell1.innerHTML = nome;
        cell2.innerHTML = cidade;
        cell3.innerHTML = idade;
        cell4.appendChild(btnEdit);
        cell4.appendChild(document.createTextNode(" "));
        cell4.appendChild(btnRemove);

        document.getElementById('modalNome').value = "";
        document.getElementById('modalCidade').value = "";
        document.getElementById('modalIdade').value = "";

        $('#myModal').modal('hide');
    }

    function editarLinha(linha) {
        let table = document.getElementById("tabelinha");
        let cells = table.rows[linha].cells;

        for (let i = 0; i < cells.length - 1; i++) {
            let novoValor;

            if (i === 2) {
                do {
                    novoValor = prompt(`Atualize o conteúdo da coluna ${i + 1} (somente número)`);
                } while (isNaN(Number(novoValor)));
            } else {
                novoValor = prompt(`Atualize o conteúdo da coluna ${i + 1}`);
            }

            cells[i].innerHTML = novoValor;
        }
    }

    function removerLinha(linha) {
        let row = document.getElementById(linha);
        row.parentNode.removeChild(row);
    }