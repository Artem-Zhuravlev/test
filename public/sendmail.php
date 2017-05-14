
<?php

$post = $_POST;

$to = 'mrJesm@yandex.ru';

$headers = "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; UTF-8\r\n";

if ($post) {
    $subject = 'Заявка с сайта';
    $message = "Телефон: ".$post['name']."<br>".
                "Имя: ".$post['e-mail']."<br>".
                "Сообщение:".$post['text'];
    mail($to, $subject, $message, $headers);
}


?>
