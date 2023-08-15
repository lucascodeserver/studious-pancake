const stringCorrompida = "*Canis %lupus )familiaris";

let caracterEspecial = ["!", "@", "#", "$", "%", "&", "*", "(", ")", "."];
let nomePurificado = "";

for (let i in stringCorrompida) {
  if (!caracterEspecial.includes(stringCorrompida[i])) {
    nomePurificado += stringCorrompida[i];
  }
}

console.log(nomePurificado);
