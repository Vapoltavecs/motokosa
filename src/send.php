<?php
$name = $_POST['name'];
$phone = $_POST['phone'];

if(strlen($name) > 0 && strlen($phone) > 0){
    $email_to = "vapoltavecs@gmail.com";

    $email_title = "Заявка(коса)";
    $nowDate = date("Y-m-d H:i:s");
    $message = "Имя: $name \nТелефон: $phone \nДата: $nowDate";

    if(mail($email_to, $email_title, $message)){
        echo "Какая то ошибка";
    }
}else{
    echo "Заполните все поля";
}