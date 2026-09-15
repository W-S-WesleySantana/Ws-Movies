import styled, { keyframes } from 'styled-components';
import { toRem } from '../../utils/toRem';

const scale = keyframes`
from{

transform: scale(0)
}
to{
transform: scale (1);
}`


export const Background = styled.div`
background-image: url(${(props) => props.$image});
height: 50vh;
background-position: center;
background-size: cover;
background-repeat: no-repeat;
position: relative;

&::before{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba( 0, 0, 0, 0.5);
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
justify-content: center;
align-items: flex-start;
height: 100%;
max-width:  ${toRem(1500)};
margin-top: - ${toRem(-100)};

`
export const Cover = styled.div`

padding:  ${toRem(20)};
display: flex;
align-items: flex-start;
height: 100%;
z-index: 99;


img{
    width:  ${toRem(400)};
    border-radius:  ${toRem(30)};
    box-shadow: rgb(100 100 111 / 20%)  ${toRem(0,7,29,0)};
    animation: ${scale} 0.5s linear;

}

`
export const Info = styled.div`

padding:  ${toRem(20)};
width: 50%;
z-index: 99;
display: flex;
align-items: flex-start;
flex-direction: column;


h2{
    font-size: ${toRem(50)};
    font-weight:700 ;
    color: #fff;

}


p{
    font-weight: 700;
    color: #fff;
    margin-top:  ${toRem(20)};
    margin-bottom:  ${toRem(30)};
}
`

export const ContainerMovies = styled.div`

display: flex;
align-items: center;
flex-direction: column;
justify-content: center;
padding:  ${toRem(20)};
width: 100%;

div{
    display: flex;
    flex-direction: column;
    max-width:  ${toRem(1000)};
    width: 100%;
    height: 100%;
    margin: ${toRem(20,0)};

}

h4{
    color: #fff;
    font-size:  ${toRem(20)};
    font-weight: 700;
    margin-bottom:  ${toRem(10)};
}

iframe{
border: none;
}

`




