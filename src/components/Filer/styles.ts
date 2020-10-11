import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  > span {
    font-family: 'Fugaz One', sans-serif;
    font-size: 6.5em;
    margin-top: 30px;
    line-height: 65%;
    color: white;
    text-shadow: 5px 5px rgba(0, 0, 0, 0.5);
  }
`

export const ChartWrapper = styled.div`
  background-color: white;
  width: 110vh;
  height: 70vh;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);
`

export const InputWrapper = styled.div`
  margin-top: 5%;
  width: 90%;
  height: 15%;
  border: 4px dotted lightgray;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  

  input {
    width: 60%;
    height: 15%;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    border-radius: 15px;
    background-color: red;

    /* z-index: -1; */
  } 

  input + label {
    font-size: 1.60em;
    font-weight: 700;
    color: lightgray;
    display: inline-block;
}

label + p {
  font-size: 1em;
    font-weight: 700;
    color: lightgray;
    display: inline-block;
    margin: 0;
}

input:focus + label,
input + label:hover {
    background-color: none;
}
`

export const ResultWrapper = styled.div`
  margin-top: 5%;
  width: 90%;
  height: 15%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  font-size: 2em;
  font-weight: 700;
  color: lightgray;

  p {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 10px;

    p {
      margin: 0 10px;
      color: rgba(255, 159, 64, 1);
    }

  }
`
