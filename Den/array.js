let aluno_notas = [];
aluno_notas.push(10);
aluno_notas.push(8);
aluno_notas.push(9);
aluno_notas.push(7);

let media = 0;
// [ 0, 1, 2, 3]
// [ 10, 8, 9, 7]

// 10 + 8 + 9 + 7
//       4

console.log(media);
// i = 4
for (let i = 0; i < aluno_notas.length; i++) {
  //media = 34
  //media =
  media = media + aluno_notas[i];
  console.log(media);
}

// media = media / aluno_notas.length
media /= aluno_notas.length;

console.log(aluno_notas);
console.log(media);

console.log(aluno_notas.pop());
console.log(aluno_notas);
