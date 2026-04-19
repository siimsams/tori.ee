<?php
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$message = $_POST['message'];
$response = $_POST['token'];

$formcontent=" Nimi: $name \n Telefon: $phone \n E-mail: $email \n Sõnum: \n $message";
$safeEmail = preg_replace('/[\r\n]+/', '', $email);
$safePhone = preg_replace('/[\r\n]+/', '', $phone);
$subject = "Võimalik matk // $safePhone // $safeEmail";
$mailheader = "From: noreply@tori.ee\r\nReply-To: $safeEmail\r\n";

$env = parse_ini_file('.env');
$secret = $env["RECAPTCHA_SECRET"];
$recipient = $env["RECIPIENT"];


function validated($response, $secret) {
    $url = "https://www.google.com/recaptcha/api/siteverify?secret=".$secret."&response=".$response;

    return json_decode(file_get_contents($url))->success;
}

if ($name and $email and $phone and $message and validated($response, $secret)) {
  if (mail($recipient, $subject, $formcontent, $mailheader)) {
    echo json_encode(['success' => true]);
  } else {
    echo json_encode(['success' => false, 'message' => 'Error!']);
  }
  exit;
}

echo json_encode(['success' => false, 'message' => 'fail']);
exit;
?>
