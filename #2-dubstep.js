// Kata: https://www.codewars.com/kata/551dc350bf4e526099000ae5

/* Description: */

// ********* My Solution *******

function songDecoder(song){
  let str = '';
  
  // First clear before the first word
  str = song.replace(/^(WUB)*(?=\w)/, '');
  
  // Secondly clear WUB betweens the words
  str = str.replace(/WUB/gm, ' ');

  // Thirdly, clear the multiple spaces
  str = str.replace(/\s+/gm, ' ');
  
  // Fourthly, remove the latest spaces
  str = str.replace(/\s+$/, '')

  return str;
}