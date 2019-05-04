rm -rf out
rm -rf out.code
rm -rf proof.json
rm -rf proving.key
rm -rf verification.key
rm -rf verifier.sol
rm -rf witness
if test -f "../../zokrates"; then
	../../zokrates compile -i square.code
	../../zokrates setup --proving-scheme pghr13
	../../zokrates compute-witness -a 3 9
	../../zokrates generate-proof --proving-scheme pghr13
	../../zokrates export-verifier --proving-scheme pghr13
fi
