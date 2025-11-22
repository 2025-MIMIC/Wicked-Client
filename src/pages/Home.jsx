import styled from "styled-components";
import Characterimg from "../assets/Characterimg.png";
import Commentimg from "../assets/comment.png";
import Logoimg from "../assets/logo.png";

const Container = styled.div`
    display:flex;
    height: 100vh;          /* 화면 전체 */
    width: 100vw;
    justify-content: space-around;
`
const Left = styled.div`
    display:flex;
    flex-direction: column;
    justify-content:center; /* 세로 중앙 */
    align-items:center;     /* 가로 중앙 */
`
const Right = styled.div`
    display:flex;
    flex-direction: column;
    justify-content:center; /* 세로 중앙 */
    align-items:center;     /* 가로 중앙 */
`
const CharacterBox = styled.div`
    width:311px;
    height:310px;
    background-image: url(${Characterimg});
`
const Logo = styled.div`
    width:383px;
    height:180px;
    background-image: url(${Logoimg});
`
const Comment = styled.div`
    width:271px;
    height:216px;
    background-image: url(${Commentimg});
    transform: translate(150px, 50px); 
`
const Button = styled.button`
    background-color:#B0DEF7;
    color:white;
`

export default function Home(){
    return(
        <Container>
            <Left>
                <Comment></Comment>
                <CharacterBox></CharacterBox>
            </Left>
            <Right>
                <Logo></Logo>
                <Button>시작하기</Button>
            </Right>
        </Container>
    )
}