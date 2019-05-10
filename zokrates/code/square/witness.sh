
# below for v4 comment out for v3
params="--proving-scheme pghr13"
if test -f "../../zokrates"; then
  for root in {2..6}
  do
    let square=root*root
    ../../zokrates compute-witness -a $root $square
    ../../zokrates generate-proof $params
    mv proof.json proof$root$square.json
  done
fi
