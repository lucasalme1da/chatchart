import React, { useState } from 'react'
import Chart from '../Chart'
import { regexToCountMessages } from '../../utils'

import { Wrapper, ChartWrapper, InputWrapper, ResultWrapper } from './styles'

type response = {
  uniqueMessagesArray: string[],
  frequencyArray: number[]
}

const Filer = () => {
  const [content, setContent] = useState<string[]>(['', '', '', '', '', ''])
  const [data, setData] = useState<number[]>([8, 2, 3, 4, 5, 6])
  const [hasFile, setHasFile] = useState<Boolean>(false)
  let fileReader: any;

  const handleFileRead = (e: any) => {
    const fullMessages = fileReader.result;
    const response: response = regexToCountMessages(fullMessages)
    setContent(response.uniqueMessagesArray)
    setData(response.frequencyArray)
    setHasFile(true)
  }

  const handleFile = (file: React.ChangeEvent<HTMLInputElement>) => {
    fileReader = new FileReader();
    fileReader.onloadend = handleFileRead;
    fileReader.readAsText(file.target.files?.item(0))
  }

  return (
    <Wrapper>
      <span>
        chatchart
      </span>
      <ChartWrapper>
        {hasFile ?
          <ResultWrapper>
            <span>
              <p>
                <p>
                  {data[data.length - 1]}
                </p> messages in
              <p>
                  {content.length}
                </p> days 😱
            </p>
            </span>
          </ResultWrapper>
          :
          <InputWrapper>
            <input
              type='file'
              id='file'
              className='input-file'
              accept='.txt'
              onChange={e => handleFile(e)}
            />
            <label htmlFor="file">Click or drop a WhatsApp chat history file here to see the magic 😉</label>
            <p>(We do NOT keep your messages!)</p>
          </InputWrapper>
        }
        <Chart labels={content} data={data} />
      </ChartWrapper>
    </Wrapper>
  );
}

export default Filer;