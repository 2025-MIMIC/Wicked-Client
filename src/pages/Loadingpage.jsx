import styled from "styled-components";
import Loadingimg from "../assets/loading.png";

const Body = styled.div`
    display:flex;
    flex-direction: column;
    justify-content:center; /* 세로 중앙 */
    align-items:center;     /* 가로 중앙 */
    height: 100vh;          /* 화면 전체 */
    width: 100vw;
`;

const Title = styled.p`
    font-size:33px;
    font-weight: bold;
    margin: 0 0 20px 0; /* spacing */
`;

const Sub = styled.p`
    font-size:20px;
    margin: 0 0 40px 0; /* spacing */
`;

const Loading = styled.div`
    width:274px;
    height:268px;
    background-image: url(${Loadingimg});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
`;

export default function Loadingpage(){
    return(
        <Body>
            <Title>재미있는 대사를 만드는 중이에요!</Title>
            <Sub>조금만 기다려주세요!</Sub>
            <Loading></Loading>
        </Body>
    )
}