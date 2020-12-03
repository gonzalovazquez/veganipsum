import fruits from '../mocks/fruits'
import text from '../mocks/text'

function VeganImpsumGenerator(size, repeat = 1) {
  let transformedText = ''
  const sizing = {
    Large: 750,
    Medium: 500,
    Small: 250
  }

  // Limit text based on size
  transformedText += text.substring(0, sizing[size])

  console.log(repeat)

  for (let index = 0; index < repeat; index++) {
    console.log(index)
    transformedText += transformedText.substr(0, transformedText.lastIndexOf(" ")) + '<br />' + '<br />'
    // https://stackoverflow.com/questions/1199352/smart-way-to-truncate-long-strings
  }

  return { __html: transformedText }
}

export default VeganImpsumGenerator