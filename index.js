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

// titleCased(tutorials)
// console.log(tutorials)

//const titleCased = tutorials.map(title => title.charAt(0).toUpperCase() + title.substr(1).toLowerCase())

// const titleCased = () => {
//   return tutorials
// }

// words.map((word) => {
    //   return word[0].toUpperCase() + word.substring(1)
    // }).join(" ")

// const titleCased = () => {
//   let newTutorials = tutorials.map(function (element) {
//     const words = element.split(" ")
//     return words.map(word => word.charAt(0).toUpperCase() + word.substring(1)).join(" ")
//   })
//   return newTutorials
// }

function titleCased(){
  let mappedArray = tutorials.map(function (element) {
    const words = element.split(" ")
    return words.map(word => word[0].toUpperCase() + word.substring(1)).join(" ")
  })
  return mappedArray
}