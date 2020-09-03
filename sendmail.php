<?php 

    if(isset($_POST['btnmail']))
    {

    $namemail = strip_tags(htmlspecialchars($_POST['namemail']));
    $emailmail = strip_tags(htmlspecialchars($_POST['emailmail']));
    $phonemail = strip_tags(htmlspecialchars($_POST['phonemail']));
    $titlemail = strip_tags(htmlspecialchars($_POST['titlemail']));
    $msgmail = strip_tags(htmlspecialchars($_POST['msgmail']));

        $to = "chintiadevi98@gmail.com";
        $subject = "Pesan An Namiroh:  $titlemail";
        $body = "Kamu menerima pesan baru dari pengunjung Web An Namiroh.\n\n"."Ini adalah detailnya:\n\nNama: $namemail\n\nEmail: $emailmail\n\nNomor Handphone: $phonemail\n\nPesan:\n$msgmail";
        $header = "Message from An Namiroh";


           $to = "chintiadevi98@gmail.com";

           if(mail($to,$subject,$body,$header))
           {
            header("location:Index.php?success");
        }
    }
 else
 {
     header("location:Index.php");
 }
?>