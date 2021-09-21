const sentence = "hello there from lighthouse labs";
for (const char of sentence) {
    process.stdout.write(char);
  }

//   setTimeout(() => {
//     // print the char here
//     console.log(sentence);
//   }, 1000) 

  setTimeout(() => {
      for (let i=0;  i<=sentence.length; i++){
    // print the char here
    console.log(sentence[i]);}
  }, 50) 