<!--Dado o enunciado abaixo marque a opção correta para a estrutura de função:
Faça uma função que recebe por parâmetro um nome de objeto e dois valores. A função deve fazer a
média dos dois valores recebidos e mostrar o resultado no objeto cujo nome foi recebido por parâmetro.
a)
function fteste(x, a, b){
 m = (a + b) /2;
 obj = document.
getElementById(‘x’);
 x.value = m; if *
}
b)
function fteste(x, a, b){
 m = (a + b) /2;
 obj = document.
getElementById(x);
 obj.value = m; if *
}
c)
function fteste(x, a, b){
 m = (a + b) /2;
 obj = document.
getElementById(x);
 x.value = m; if *
}
d)
function fteste(x, a, b){
 m = (a + b) /2;
 x.value = m; if *
}-->
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script>

        function fteste(x, a, b) {

            m = (a + b) / 2;

            obj = document.getElementById(x);

            obj.value = m;
        }

    </script>


</head>

<body>

</body>

</html>
