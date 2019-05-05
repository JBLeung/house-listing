rm -rf out
rm -rf out.code
rm -rf proof.json
rm -rf proving.key
rm -rf verification.key
rm -rf verifier.sol
rm -rf witness
# below for v4 comment out for v3
params="--proving-scheme pghr13"
if test -f "../../zokrates"; then
	../../zokrates compile -i square.code
	../../zokrates setup $params
	../../zokrates compute-witness -a 3 9
	../../zokrates generate-proof $params
	../../zokrates export-verifier $params
fi
