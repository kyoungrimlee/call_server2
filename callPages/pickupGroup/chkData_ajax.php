<?php
header('Content-Type: text/html; charset=utf-8 ');
include_once dirname(__FILE__) . "/../../lib/setConfig.php";
    //create the SQL query string
    $key=$_POST['key' ];
    $sQuery = "Select PCODE from PICKUPGROUP where PCODE='$key' ";
    $oResult = mysqli_query($db,$sQuery);
    $noNumber= mysqli_num_rows($oResult) ;
    $sInfo = '';
    if($oResult and $noNumber > 0) {
        $sInfo = "bad_data";

    } else {
          $sInfo = "";
    }
    
    echo $sInfo;

?>