rm -rf out
rm -rf out.code
rm -rf proof.json
rm -rf proving.key
rm -rf verification.key
rm -rf verifier.sol
rm -rf witness
if test -f "../../zokrates"; then
	../../zokrates compile -i square/
	../../zokrates --proving-scheme pghr13 setup
	../../zokrates compute-witness -a 3 9
	../../zokrates --proving-scheme pghr13 generate-proof
	../../zokrates --proving-scheme pghr13 export-verifier
fi
