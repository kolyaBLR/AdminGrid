<?php
    $m = array('Honda','Hummer','BMW','Toyota','T-34', 'al ha', 'al ha');
    $s = array('AH','TU-144','Boing','apache','T-34','al ha', 'al ha');
    $t = array('tiger','panther','T-34','al ha','T-34','al ha', 'al ha');
    $k = array('dsad','sdad','sss','dasd','T-34','al ha', 'al ha');
    $n = array('123','22','T-1231234','dddl hsssa','T-34','al ha', 'al ha');
    $x = array('c1ec1e','sdace1d','sc1ss','da1dsd','T-34','al ha', 'al ha');
    $THN = array($m, $s, $t, $k, $n, $x);
    $THN = json_encode($THN);
    echo $THN;
?>