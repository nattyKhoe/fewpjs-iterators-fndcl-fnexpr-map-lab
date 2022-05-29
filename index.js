const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  // use the .map method on the tutorials to return a new array
  for (let i=0; i<tutorials.length; i++){
    const word = tutorials[i].split(' ');
    const newWord = word.map(word=>word.charAt(0).toUpperCase()+word.substring(1));
    tutorials[i] =newWord.join(' ');
  }
  return tutorials;
  // for (let i =0; i<tute.length; i++){
  //   const word = tute[i].split(' ');
  //   return word;
  // }
  //   let newWord = word.map(word => word.charAt(0).toUpperCase() +word.substring(1));
  //   tutorials[i] = newWord.join(' ');
  // }
}
console.log(titleCased())