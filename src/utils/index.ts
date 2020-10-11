export const regexToCountMessages = (fileContent: string) => {
  // PARA ANDROID:
  // const messageArray = fileContent.match(/(0?[1-9]|1[012])[/](0?[1-9]|[12][0-9]|3[01])[/]\d{2}(, )(([0-1][0-9]|[2][0-3]):([0-5][0-9]))( - )/g)
  // PARA IOS:
  // const messageArray = fileContent.match(/(\[)(0[1-9]|[12][0-9]|3[01])[/](0[1-9]|1[012])[/]\d{2}( )(([0-1][0-9]|[2][0-3]):([0-5][0-9])):([0-5][0-9])(] )/g)
  // PARA AMBOS: (TESTE!!!)
  const messageArray = fileContent.match(/((\[)(0[1-9]|[12][0-9]|3[01])[/](0[1-9]|1[012])[/]\d{2}( )(([0-1][0-9]|[2][0-3]):([0-5][0-9])):([0-5][0-9])(] ))|((0?[1-9]|1[012])[/](0?[1-9]|[12][0-9]|3[01])[/]\d{2}(, )(([0-1][0-9]|[2][0-3]):([0-5][0-9]))( - ))/g)
  const messages: string[] = regexToFilterDates(messageArray)
  console.log(messages)

  let uniqueMessagesArray: string[] = []
  let frequencyArray: number[] = []
  let count = 0
  let lastMessage = ''

  messages.push('dummy')
  messages.forEach((message, index) => {
    if ((index > 0 && lastMessage !== message)) {
      uniqueMessagesArray.push(lastMessage)
      frequencyArray.push(count);
      lastMessage = message
    } else {
      count++
      lastMessage = message
    }
  })

  return { uniqueMessagesArray, frequencyArray }
}

export const regexToFilterDates: any = (messages: string[]) => {
  // PARA ANDROID:
  // return messages.map(message => message.match(/(0?[1-9]|1[012])[/](0?[1-9]|[12][0-9]|3[01])[/]\d{2}/)![0])
  // PARA IOS:
  // return messages.map(message => message.match(/(0[1-9]|[12][0-9]|3[01])[/](0[1-9]|1[012])[/]\d{2}/)![0])
  // PARA AMBOS: (TESTE!!!)
  return messages.map(message => message.match(/(((0[1-9]|[12][0-9]|3[01])[/](0[1-9]|1[012])[/]\d{2})|((0?[1-9]|1[012])[/](0?[1-9]|[12][0-9]|3[01])[/]\d{2}))/)![0])
}