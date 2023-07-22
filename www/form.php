<?php
$name = $_POST['fullname'];
$email = $_POST['email'];
$phone = $_POST['number'];
$message = $_POST['message'];
$response = $_POST['token'];
$formcontent=" Nimi: $name \n Telefon: $phone \n E-mail: $email \n Sõnum: \n $message";
$recipient = "siimsams@tdl.ee";
$subject = "Võimalik matk // $phone // $email";
$mailheader = "From: $email \r\n";

$env = parse_ini_file('.env');
$secret = $env["RECAPTCHA_SECRET"];

function validated() {
    $url = "https://www.google.com/recaptcha/api/siteverify?secret=".$secret."&response=".$response;

    return json_decode(file_get_contents($url))->success;
}

if ($name and $email and $phone and $message and validated()) {
  mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
  header("Location: form.html?success=true");
  exit;
}
header("Location: form.html?success=false");
exit;
?>