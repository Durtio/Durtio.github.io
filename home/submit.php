<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

# проверка, что ошибки нет
if (!error_get_last()) {

  // Переменные, которые отправляет пользователь
  $name = $_POST['name'];
  $phone = $_POST['phone'];
  $category = $_POST['category'];
  $service = $_POST['service'];
  $date = $_POST['date'];
  $comm = $_POST['comment'];


  // Формирование самого письма
  $title = "Новая онлайн-запись";
  $body = "
    <h2>Новая онлайн-запись!</h2>
    <b>ФИО:</b> $name<br>
    <b>Номер телефона:</b> $phone<br><br>
    <b>Категория:</b>$category<br>
    <b>Услуга:</b>$service<br>
    <b>Дата:</b>$date<br>
    <b>Дополнительная информация:</b>$comm<br>
    ";

  // Настройки PHPMailer
  $mail = new PHPMailer\PHPMailer\PHPMailer();

  $mail->isSMTP();
  $mail->CharSet = "UTF-8";
  $mail->SMTPAuth = true;
  //$mail->SMTPDebug = 2;
  $mail->Debugoutput = function ($str, $level) {
    $GLOBALS['data']['debug'][] = $str; };

  // Настройки вашей почты
  $mail->Host = 'smtp.mail.ru'; // SMTP сервера вашей почты
  $mail->Username = 'i.5555qa@bk.ru'; // Логин на почте
  $mail->Password = 'N2qEeNiWzeuwm1s3Zf6b'; // Пароль на почте
  $mail->SMTPSecure = 'ssl';
  $mail->Port = 465;
  $mail->setFrom('i.5555qa@bk.ru', 'Игнат'); // Адрес самой почты и имя отправителя

  // Получатель письма
  $mail->addAddress('meowgamer112@gmail.com');

  // Отправка сообщения
  $mail->isHTML(true);
  $mail->Subject = $title;
  $mail->Body = $body;

  // Проверяем отправленность сообщения
  if ($mail->send()) {

  } else {
    $data['result'] = "error";
    $data['info'] = "Сообщение не было отправлено. Ошибка при отправке письма";
    $data['desc'] = "Причина ошибки: {$mail->ErrorInfo}";
  }

} else {
  $data['result'] = "error";
  $data['info'] = "В коде присутствует ошибка";
  $data['desc'] = error_get_last();
}

// Отправка результата
header('Content-Type: application/json');
echo json_encode($data);













?>