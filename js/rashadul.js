// /**
//  * Typing text
//  */
// async function typeSentence( sentence = "hello", delay = 100) {
//     const el = document.getElementById("sentence");
//     const letters = sentence.split("");
//     let i = 0;
//     while( i < letters.length ) {
//         await waitForMs(delay);
//         el.append(letters[i]);
//         i++;
//     }
//     return;
// }
// // deleteing


// async function deleteSentence() {
//     const sentence = document.getElementById("sentence").innerHTML();
//     const letters = sentence.split("");
//     let i = 0;
//     while(letters.length > 0) {
//       await waitForMs(100);
//       letters.pop();
//       sentence.innerHTML(letters.join(""));
//     }
//   }


// function waitForMs(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms))
// }


//     typeSentence("Mr. Stark, I don't feel so good..");
//     typeSentence("Hello world");
//     waitForMs(2000);
//     deleteSentence(sentence);



// const myText = ["Web Developer", "Programmer", "Dreamer", "Bloger"]
// typeSentence(myText)
// // typeSentence("Hey, over here!")