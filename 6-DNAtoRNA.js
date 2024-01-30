// WPU Coding Challenge 2024
// 6/366
// https://www.codewars.com/kata/5556282156230d0e5e000089/solutions/javascript

// function DNAtoRNA(dna) {
//     let rna = ''
//     for (let i = 0; i < dna.length; i++){
//         if (dna[i] === 'T') {
//             rna += 'U'
//         } else{
//             rna += dna[i]
//         }
//     }
//     return rna
// }

// function DNAtoRNA(dna) {
//     let rna = ''
//     for (let i = 0; i < dna.length; i++) rna += dna[i] === 'T' ? 'U' : dna[i]
//     return rna
// }

// function DNAtoRNA(dna) {
//     return dna.split('').map((vl) => (vl === 'T' ? 'U' : vl)).join('')
// }

function DNAtoRNA(dna) {
    return dna.split('T').join('U')
}

// function DNAtoRNA(dna) {
//     return dna.replaceAll('T', 'U')
// }

console.log(DNAtoRNA("TTTT"))