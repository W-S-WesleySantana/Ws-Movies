import styled, {keyframes} from "styled-components";
import { toRem } from "../../utils/toRem";

const scale = keyframes`
from{

transform: scale(0)
}
to{
transform: scale (1);
}`

export const Background = styled.div`
background-image: url(${(props) => props.$img});
height: 100vh;
background-position: center;
background-size: cover;
display: flex;
align-items: center;
justify-items: center;

&::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
}

&::after{
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height:  ${toRem(120)};
    background-image: linear-gradient(to top, #0f0f0f, rgba(0,0,0,0));
}



`

export const Container = styled.div`

display: flex;
justify-content: space-around;
align-items: center;
height: 100%;
max-width:  ${toRem(1200)};

`

export const Info = styled.div`
z-index: 2;
padding:  ${toRem(20)};
width: 50%;

h1{
    font-size: 5rem;
    font-weight: 700;
    color: #fff; 
  

}

p{
    font-size: 1rem;
    font-weight: 500;
    color: #fff;
    margin-top:  ${toRem(30)};
    margin-bottom:  ${toRem(20)};

}



`

export const Poster = styled.div`
z-index: 2;
img{
width:  ${toRem(300)};
border-radius:  ${toRem(30)};
animation: ${scale} 0.5s linear;
}
`

export const ContainerButtons = styled.div`
display: flex;
gap:  ${toRem(20)};
margin-top:  ${toRem(30)};




`