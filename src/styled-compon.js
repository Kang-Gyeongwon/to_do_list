import styled from 'styled-components';

export const Containsr = styled.div`
  height: 100vh;
  display : flex; justify-content: center;
  align-items: center;
  background-color: #EAEAEA;
`
export const ContentBox = styled.div`
  width: 65%; height: 65%;
  position: relative;
  box-sizing: border-box;
  background-color: white;
  border-radius: 3%;
  padding: 3%;
`
export const Headline = styled.p`
  @font-face {
    font-family: 'Cafe24Oneprettynight';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_twelve@1.1/Cafe24Oneprettynight.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
  font-family: 'Cafe24Oneprettynight';
  font-size: 48px; font-weight: 900; margin: 3.5%; 
  text-align: center;
  @media all and (max-width: 410px){
    font-size: 36px;
  }
`
export const Text = styled.p`
  @font-face {
    font-family: 'Cafe24Oneprettynight';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_twelve@1.1/Cafe24Oneprettynight.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
  font-family: 'Cafe24Oneprettynight';
  font-size: 17px; margin: 3.5%; font-weight: 600;
  text-align: center;
`
/* 할일 입력 input */
export const TextInput = styled.input`
  width: 80%; height: 4.5%;
  box-sizing: border-box; margin-left: 10%;
  padding: 3% 3% 3% 4%; font-size: 16px;
  @font-face {
    font-family: 'Cafe24Oneprettynight';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_twelve@1.1/Cafe24Oneprettynight.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
  font-family: 'Cafe24Oneprettynight'; 
  border: 1px solid #B7B7B7; border-radius: 5px;
  outline: none;
`
export const AddBtn = styled.button`
  width: 60px; height: 60px;
  background-color: #D6C7ED;
  border: none; border-radius: 50%; cursor: pointer;
  outline: none; display: flex;
  justify-content: center; align-items: center;
  color: white; font-size: 17px;
  position: absolute;
  top: 100%; left: 50%;
  transform: translate(-170%, -50%);
  @font-face {
    font-family: 'RIDIBatang';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_twelve@1.0/RIDIBatang.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
  font-family: 'RIDIBatang';
  &:hover{
    background-color: #C8C7ED;
  }
  @media all and (max-width: 410px){
    width: 47px; height: 47px;
    font-size: 14px;
  }
`
export const DeleteBtn = styled.button`
  width: 60px; height: 60px;
  background-color: #D6C7ED;
  border: none; border-radius: 50%; cursor: pointer;
  outline: none; display: flex;
  justify-content: center; align-items: center;
  color: white; font-size: 17px;
  position: absolute;
  top: 100%; left: 49%;
  @font-face {
    font-family: 'RIDIBatang';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_twelve@1.0/RIDIBatang.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
  font-family: 'RIDIBatang';
  &:hover{
    background-color: #C8C7ED;
  }
  @media all and (max-width: 410px){
    width: 47px; height: 47px;
    font-size: 14px; left: 42%;
  }
`