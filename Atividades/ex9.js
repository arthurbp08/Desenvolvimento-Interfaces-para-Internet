<!DOCTYPE html>
<html>
<head>
    <title>Exemplo de evento onchange</title>
</head>
<body>
    <h2>Escolha uma cor:</h2>
    <select id="corSelecionada">
        <option value="vermelho">Vermelho</option>
        <option value="verde">Verde</option>
        <option value="azul">Azul</option>
    </select>

    <p>A cor selecionada é: <span id="corExibida"></span></p>

    <script>
        // Obtém o elemento select e o elemento span onde exibiremos a cor selecionada
        var selectElement = document.getElementById("corSelecionada");
        var spanElement = document.getElementById("corExibida");

        // Adiciona um ouvinte de evento onchange ao elemento select
        selectElement.onchange = function() {
            // Quando o valor do select muda, atualizamos o texto no elemento span
            spanElement.textContent = selectElement.value;
        };
    </script>
</body>
</html>
