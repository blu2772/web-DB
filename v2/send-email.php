<?php

function email_versand($Empfaenger, $Betreff, $Sender, $Text){
    $Header = "MIME-Version: 1.0\r\n";
    $Header .= "Content-type: text/html; charset=utf-8\r\n";
    $Header .= "From:".$Sender;

    mail($Empfaenger, $Betreff, $Text, $Header);

}
$name = $_POST['name'];
$email = $_POST['email'];
$betreff = $_POST['betreff'];
$message = $_POST['message'];




email_versand("tim@chipworker.de", $betreff, $email, $message);

echo"Danke für deine Anfrage. Ich werde so schnell wie möglich antworten"
?>