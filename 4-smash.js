// WPU Coding Challenge 2024
// 4/366
//https://www.codewars.com/kata/53dc23c68a0c93699800041d/solutions/javascript

// function smash (words) {
//     return words.join(' ')
//  };

// function smash (words) {
//     let hasil = '';
//     for(let i = 0; i < words.length; i++){
//         hasil += words[i]
//         if(i != words.length - 1){
//             hasil += ' '
//         }
//     }

//     return hasil
//  };

 const smash = (words) => words.join(' ')

 console.log(smash(['hello', 'world', 'this', 'is', 'great']))