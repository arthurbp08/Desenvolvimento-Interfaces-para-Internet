<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    
        <!-- 1. Faça um código JavaScript que mostra uma caixa de diálogo (prompt) para o usuário informar sua idade.
        Se o usuário informar uma idade menor que 18 mostrar em uma caixa de alerta a mensagem “Menor de
        idade”. Se o usuário informar um valor maior ou igual a 18, mostrar mensagem “Maior de idade”. -->

   <script>
    
    var idade = prompt('Digite seu idade:');
    
    if(idade=>18){
        document.write("Maior de Idade");
    }
    else{
        document.write("Menor de idade");
    }

    </script>
</head>
<body>
    
</body>
</html>
