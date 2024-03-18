<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
 
<form method = "post" action = "formulario.php">
    <label>E-mail:</label>
    <input type = "text" name = "email" placeholder = "Informe seu e-mail">
    <br>
    <input type="submit" value="enviar dados">

    <?php
        if($_POST){
            $email = $_POST['email']; //captura o name do input
            echo 'Seu e-mail é: '.$email;
        }
    ?>

</form>
    
</body>
</html>