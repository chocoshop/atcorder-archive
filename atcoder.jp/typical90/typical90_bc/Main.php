<?php

[$N, $P, $Q] = fscanf(STDIN, "%d%d%d");
$A = array_map("intval", explode(" ", trim(fgets(STDIN))));

$result = 0;
for ($i = 0; $i < $N; $i++) {
  for ($j = $i+1; $j < $N; $j++) {
    $tmp1 = $A[$i] * $A[$j] % $P;
    for ($k = $j+1; $k < $N; $k++) {
      $tmp2 = $tmp1 * $A[$k] % $P;
      for ($l = $k+1; $l < $N; $l++) {
        $tmp3 = $tmp2 * $A[$l] % $P;
        for ($m = $l+1; $m < $N; $m++) {
          if ($tmp3 * $A[$m] % $P == $Q) {
            $result++;
          }
        }
      }
    }
  }
}
echo $result;