<?php

/*/ This is the the directory in which the data is being saved.
$directory = "<data/>";

// Count the files in said directory
$filecount = 0;
$files = glob($directory . "*");
if ($files){
    $filecount = count($files);
}

/* Set the limit, and check against it wheter you should load the experiment
or another "thank you" page.*/

$filecount = 1;
$limit = 150;
if ($filecount < $limit){
    readfile('exp.html');
}
else {
    readfile('done.html');
}

?>