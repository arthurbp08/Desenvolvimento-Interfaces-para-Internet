<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <!--2. Crie um formulário de contato e torne os campos: nome, e-mail e assunto obrigatórios, validando-os
    através de uma função JavaScript. Para cada campo não preenchido mostre uma mensagem de alerta.-->

    <script>

        var email = document.getElementById('email').value;
        
        var nome = document.getElementById('nome').value;
        
        var assunto = document.getElementById('assunto').value;
        
        
        if(nome == "" || email == "" || assunto == "")
        {
            document.write("Preencha todos os campos do formulario");
        }

    </script>

</head>

<body>
    <h1>Formulário de Contato</h1>
    
    <form id="meuFormulario" onsubmit="return validarFormulario()">
        <label for="nome">Nome:</label>
        <input type="text" id="nome" name="nome" required><br><br>

        <label for="email">E-mail:</label>
        <input type="email" id="email" name="email" required><br><br>

        <label for="assunto">Assunto:</label>
        <textarea id="assunto" name="assunto" required></textarea><br><br>

        <input type="submit" value="Enviar">
    </form>

</body>

</html>
