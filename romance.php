<?php

$gifts = $_POST['gifts'];
$quality = $_POST['quality'];
$gift_value = 0;
$quality_value = 0.0;
$friendship = 0.0;


# Gaining a value from "gifts" submitted input
if ($gifts == "loved") {
    $gift_value = 80;
}
elseif ($gifts == "liked") {
    $gift_value = 45;
}
elseif ($gifts == "neutral"){
    $gift_value = 20;
}
elseif ($gifts == "disliked") {
    $gift_value = -20;
}
elseif ($gifts == "hated") {
    $gift_value = -40;
}


# Gaining a value from "quality" submitted input
if ($quality == "iridium") {
    $quality_value = 1.5;
}
elseif ($quality == "gold") {
    $quality_value = 1.25;
}
elseif ($quality == "silver"){
    $quality_value = 1.1;
}
elseif ($quality == "basic") {
    $quality_value = 1;
}


if ($gifts == "loved" or $gifts == "liked") {
    $friendship = $quality_value * $gift_value;
}
else {
    $friendship = $gift_value;
}

echo("Total friendship gained: " . $friendship)
?>