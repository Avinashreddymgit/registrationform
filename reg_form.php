<!DOCTYPE html>
<html>
    <head>
        <title> Reg_Form </title>
        <link rel="stylesheet" href="styles.css">
    </head>
    <body>
        <?php
         if($_SERVER["REQUEST_METHOD"]=="GET"){
            $choice = $_GET['v']??('N/A');
            if($choice=='N/A'){
                echo "<h1><strong>Please select a country.</strong></h1>";
            }
            else if($choice=='U'){
                echo "<h1><strong>Visa required for most applicants.</strong></h1>";
            }
            else if($choice=='C'){
                echo "<h1><strong>Visa required unless you have an eTA.</strong></h1>";
            }
            else if($choice=="I"){
                echo "<h1><strong>Visa required before travel.</strong></h1>";
            }
            else if($choice=="UK"){
                echo "<h1><strong>Visa depends on the duration of stay</strong></h1>";
            }
            else if($choice=="AUS"){
                echo "<h1><strong>Visa depends on the duration of stay.</strong></h1>";
            }
         }
        ?>
    </body>
</html>