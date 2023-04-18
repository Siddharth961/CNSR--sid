<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "";
    $from = $_POST['name'];
    $subject = $_POST['subject'];
    $name = $_POST['name'];
    $headers = "From: $from";

    $fields = array();
    $fields["name"] = "name";
    $fields["email"] = "email";
    $fields["subject"] = "subject";
    $fields["message"] = "message";

    $body = "Here is what was sent:\n\n";
    foreach ($fields as $a => $b) {
        $body .= sprintf("%20s: %s\n", $b, $_POST[$a]);
    }

    $send = mail($to, $subject, $body, $headers);
}
?>
