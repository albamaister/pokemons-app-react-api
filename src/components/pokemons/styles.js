import styled from 'styled-components';


export const ContainerDetail = styled.div`
  margin: 2px;
  margin-top: 45px;
  height: 570px;
  border-radius: 0.2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;  
  ${props => props.type === 'rock' 
  ? 'background-color: rgb(148, 81, 81); border: 3px solid rgb(108, 81, 81); '
  : props.type === 'ghost'
  ?  'background-color: rgb(247, 247, 247); border: 3px solid #DFDFDF '
  : props.type === 'electric'
  ? 'background-color: rgb(255, 255, 161); border: 3px solid #DDDD8C'
  : props.type === 'bug'
  ?  'background-color: #F6D6A7; border: 3px solid #E1C1A2;'
  : props.type === 'poison'
  ? ' background-color: #e0a7f6; border: 3px solid #A485B0;'
  : props.type === 'normal'
  ? 'background-color: #F4F4F4; border: 3px solid #D5D4D4;'
  : props.type === 'fairy'
  ?  'background-color: rgba(255, 192, 203, 0.863); border: 3px solid #B38991;'
  : props.type === 'fire'
  ? ' background-color: #FBE3DF; border: 3px solid #D7C3BF;'
  : props.type === 'grass' 
  ? 'background-color:#E2F9E1; border: 3px solid #D0E5CF;' 
  : props.type === 'psychic' ?
  'background-color: rgba(212, 192, 100, 0.863); border: 3px solid #B7A659;'
  : 'background-color:#E0F1FD; border: 3px solid #C9DCEA;'
}
`

export const ImageDetail = styled.img`
  width: 100px;
`

export const TextNumber = styled.label`
  font-size: 14px,
`

export const TextName = styled.label`
  font-size: 30px;
  font-weight: bold;
  text-transform: capitalize;
`

export const TextDescription = styled.label`
  font-size: 20px;
  font-weight: bold;
`
export const Detail = styled.div`
  padding: 20px;
  display: flex;
  width: 100%;
  align-content: flex-start;
  align-items: flex-start;
  flex-direction: column; 
`

export const SpritesContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  flex-wrap: wrap;
`

export const SpriteImage = styled.img`
 width: 60px;
 height: 60px;
 cursor: pointer;
  &:hover {
    transform: scale(1.02);
    transition