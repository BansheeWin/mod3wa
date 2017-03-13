<?php
 function sequence_sum($begin,$end,$step){
  $sum=$begin;
  if($begin>$end){
    return 0;    
  }
  var_dump("avant while number vaut :".$sum);
   $sum = 0;
  for ($begin; $begin <= $end; $begin += $step) {
    $sum += $begin;
  }
  return $sum;
  }
     





sequence_sum(2, 6, 2);
sequence_sum(1, 5, 1);
sequence_sum(1, 5, 3);
?>