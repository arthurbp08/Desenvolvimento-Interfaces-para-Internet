<!DOCTYPE html>
<html>

<head>
    <title>Formulário de Contato</title>
</head>

<body>
    <h1>Formulário de Contato</h1>
    <form>
        Nota prova 1: <input type="text" id="p1"><br>
        Nota prova 2: <input type="text" id="p2"><br>
        Nota prova 3: <input type="text" id="p3"><br>
        Cargo:
        <select id="cargo">
            <option></option>
            <option value="Gerente">Gerente</option>
            <option value="Diretor">Diretor</option>
        </select>
        <input type="button" value="Verificar" onclick="calcularNotaEVerificarAprovacao()">
    </form>
    <div id="resultado"></div>

    <script>
        function calcularNotaEVerificarAprovacao() {
            var notaP1 = parseFloat(document.getElementById("p1").value);
            var notaP2 = parseFloat(document.getElementById("p2").value);
            var notaP3 = parseFloat(document.getElementById("p3").value);
            var cargo = document.getElementById("cargo").value;
            var media = (notaP1 * 3 + notaP2 * 3 + notaP3 * 4) / 10;
            var situacao = "REPROVADO";

            if ((cargo === "Gerente" && media > 7) || (cargo === "Diretor" && media > 8)) {
                situacao = "APROVADO";
            }

            var resultado = document.getElementById("resultado");
            resultado.innerHTML = "Situação: " + situacao;
        }
    </script>
</body>

</html>
