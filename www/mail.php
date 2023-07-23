<?php
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$message = $_POST['message'];
$response = $_POST['token'];

$formcontent=" Nimi: $name \n Telefon: $phone \n E-mail: $email \n Sõnum: \n $message";
$recipient = "siimsams@tdl.ee";
$subject = "Võimalik matk // $phone // $email";
$mailheader = "From: $email \r\n";

$env = parse_ini_file('.env');
$secret = $env["RECAPTCHA_SECRET"];

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
