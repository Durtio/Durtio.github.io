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
  $mail->Username = 'beautyhome.send@inbox.ru'; // Логин на почте
  $mail->Password = 'Xpxi9nBKR6fqpy0MBj7v'; // Пароль на почте
  $mail->SMTPSecure = 'ssl';
  $mail->Port = 465;
  $mail->setFrom('beautyhome.send@inbox.ru', ''); // Адрес самой почты и имя отправителя

  // Получатель письма
  $mail->addAddress('beautyhome.eysk@gmail.com');

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
  // Отправка результата
  header('Content-Type: application/json');
  echo json_encode($data);
}




// HTML-код для отображения сообщения и перенаправления
echo '<html>
    <head>
        <meta charset="UTF-8">
        <title>Спасибо за вашу заявку</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                text-align: center;
                padding: 50px;
                background-color: #f4f4f4;
            }
            .message {
                background-color: #ffffff;
                border-radius: 10px;
                padding: 20px;
                box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
                display: inline-block;
            }
            .message h2 {
                color: #333;
            }
            .message p {
                font-size: 18px;
                color: #666;
            }
        </style>
    </head>
    <body>
        <div class="message">
            <h2>Спасибо за вашу заявку!</h2>
            <p>Ожидайте звонка, скоро с вами свяжется администратор для подтверждения.</p>
            <p>Вы будете перенаправлены на главную страницу через несколько секунд.</p>
        </div>

        <script>
            setTimeout(function() {
                document.location.href = "index.html";
            }, 5000); // Таймер на 5 секунд
        </script>
    </body>
</html>';









?>